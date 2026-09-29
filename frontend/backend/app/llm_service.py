import os
import re
import json
from pathlib import Path
from typing import List, Dict, Any, Optional
from dotenv import load_dotenv

# Automatically load environment variables from .env files
ENV_PATHS = [
    Path(__file__).resolve().parent.parent / ".env",
    Path(__file__).resolve().parent.parent.parent / ".env",
    Path(".env"),
]
for env_path in ENV_PATHS:
    if env_path.exists():
        load_dotenv(dotenv_path=env_path)
        break


def get_gemini_api_key() -> Optional[str]:
    """Retrieve Gemini API key from environment variables."""
    key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
    if key and key.strip() and not key.startswith("your_"):
        return key.strip()
    return None


# ---------------------------------------------------------------------------
# Smart Local Rule-Based NLP Engine (Works without any API Key)
# ---------------------------------------------------------------------------

CATEGORY_KEYWORDS = {
    "Clothing": [
        "cloth", "shirt", "pant", "trousers", "dress", "outfit", "t-shirt", "tee",
        "chinos", "linen", "polo", "wear", "jacket", "hoodie", "jeans", "shorts"
    ],
    "Electronics": [
        "electronic", "gadget", "headphone", "earbuds", "speaker", "charger",
        "power bank", "tech", "audio", "bluetooth", "device", "watch", "smart band"
    ],
    "Beauty": [
        "beauty", "skincare", "cream", "sunscreen", "serum", "lip", "mist",
        "lotion", "glow", "perfume", "fragrance", "scrub", "makeup"
    ],
    "Gifts": [
        "gift", "present", "hamper", "candle", "journal", "mug", "pen", "chocolate",
        "souvenir", "keepsake", "friend", "birthday", "anniversary"
    ],
    "Accessories": [
        "accessory", "accessories", "wallet", "sunglass", "sunglasses", "shades",
        "bag", "backpack", "belt", "flask", "tumbler", "tag", "duffle", "purse"
    ],
}

OCCASIONS = [
    "birthday", "anniversary", "travel", "vacation", "goa", "beach", "work",
    "office", "wedding", "party", "casual", "daily", "gym", "resort"
]

RECIPIENTS = [
    "friend", "best friend", "brother", "sister", "mother", "mom", "father",
    "dad", "colleague", "partner", "boyfriend", "girlfriend", "husband", "wife", "myself"
]


def extract_budget(text: str) -> Optional[int]:
    """Extract budget ceiling from text (e.g. 'under 2000', 'under ₹5,000', 'below 1500')."""
    patterns = [
        r'(?:under|below|less than|max|budget|within|up to|around)\s*(?:rs\.?|inr|₹)?\s*([0-9]+(?:,[0-9]+)?)',
        r'(?:rs\.?|inr|₹)\s*([0-9]+(?:,[0-9]+)?)\s*(?:budget|max|limit)?',
        r'([0-9]+(?:,[0-9]+)?)\s*(?:rupees|rs|inr|bucks)',
    ]
    for pattern in patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            clean_val = match.group(1).replace(",", "")
            try:
                val = int(clean_val)
                if 100 <= val <= 200000:
                    return val
            except ValueError:
                continue
    return None


def extract_local_intent(text: str) -> Dict[str, Any]:
    """Extract shopping intent using pattern recognition when LLM key is absent."""
    lower_text = text.lower()
    budget_max = extract_budget(text)

    # Detect category
    detected_categories = []
    for cat, keywords in CATEGORY_KEYWORDS.items():
        if any(kw in lower_text for kw in keywords):
            detected_categories.append(cat)
    
    primary_category = detected_categories[0] if detected_categories else None

    # Detect occasions
    detected_occasions = [occ for occ in OCCASIONS if occ in lower_text]

    # Detect recipient
    detected_recipient = None
    for rec in RECIPIENTS:
        if rec in lower_text:
            detected_recipient = rec
            break

    # Detect style keywords
    styles = ["casual", "formal", "minimalist", "resort", "vintage", "sporty", "coastal"]
    detected_style = next((s for s in styles if s in lower_text), "casual")

    # Detect color constraints
    avoid_bright = any(p in lower_text for p in ["don't like bright", "no bright", "avoid bright", "subtle colors", "neutral colors", "dark colors", "earthy"])

    # Generate tailored clarification questions
    clarifications = []
    if "gift" in lower_text or primary_category == "Gifts":
        clarifications.append("What are your friend's main interests (e.g. tech gadgets, reading, minimal decor, or self-care)?")
        clarifications.append("Would you prefer a decorative gift, a lifestyle gadget, or something practical for daily use?")
    elif "travel" in lower_text or "goa" in lower_text:
        clarifications.append("Are you focusing on breezy daytime beach wear or evening dinner outfits?")
        clarifications.append("Would you like lightweight accessories (like UV sunglasses or a waterproof daypack) included?")
    else:
        if not primary_category:
            clarifications.append("Which category are you most interested in (Clothing, Electronics, Beauty, Gifts, or Accessories)?")
        if not budget_max:
            clarifications.append("Do you have a preferred target budget (e.g., under ₹1,500 or under ₹3,000)?")

    return {
        "category": primary_category,
        "categories_detected": detected_categories,
        "budget_max": budget_max,
        "occasions": detected_occasions,
        "recipient": detected_recipient,
        "style": detected_style,
        "avoid_bright_colors": avoid_bright,
        "clarification_questions": clarifications[:2],
        "summary": f"Looking for {primary_category or 'items'} {f'for {detected_recipient}' if detected_recipient else ''} {f'for {detected_occasions[0]}' if detected_occasions else ''} {f'under ₹{budget_max:,}' if budget_max else ''}".strip(),
    }


def rank_and_filter_products(intent: Dict[str, Any], catalog: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """Score and rank catalog products according to extracted intent constraints."""
    scored_products = []
    category = intent.get("category")
    budget_max = intent.get("budget_max")
    occasions = intent.get("occasions", [])
    avoid_bright = intent.get("avoid_bright_colors", False)
    recipient = intent.get("recipient")

    for p in catalog:
        score = 0
        reasons = []

        # 1. Category matching
        if category:
            if p.get("category") == category:
                score += 40
                reasons.append(f"Matches category '{category}'")
            elif category == "Gifts":
                # For gifts, items across categories that make great gifts get bonus
                if any(t in ["gift", "gift set", "artisan", "leather", "curated"] for t in p.get("tags", [])):
                    score += 30
                    reasons.append("Popular thoughtful gift choice")
        else:
            score += 10

        # 2. Budget constraint
        price = p.get("price", 0)
        if budget_max:
            if price <= budget_max:
                score += 35
                reasons.append(f"Well within your ₹{budget_max:,} budget")
            elif price <= budget_max * 1.15:
                score += 10
            else:
                # Exceeds budget significantly
                score -= 50
        else:
            score += 15

        # 3. Occasion matching
        p_occasions = [occ.lower() for occ in p.get("occasion", [])]
        for occ in occasions:
            if occ in p_occasions or any(occ in tag for tag in p.get("tags", [])):
                score += 20
                reasons.append(f"Ideal for {occ}")

        # 4. Color / style constraints
        if avoid_bright:
            p_colors = [c.lower() for c in p.get("colors", [])]
            bright_shades = ["neon", "bright yellow", "hot pink", "orange", "crimson"]
            if any(b in " ".join(p_colors) for b in bright_shades):
                score -= 30
            else:
                score += 10
                reasons.append("Subtle & neutral color palette")

        # 5. Rating boost
        rating = p.get("rating", 4.0)
        score += int(rating * 3)

        if score > 0:
            product_copy = dict(p)
            product_copy["relevance_score"] = score
            product_copy["recommendation_reason"] = " • ".join(reasons[:2]) if reasons else "Highly rated in our catalog"
            scored_products.append(product_copy)

    # Sort descending by relevance score
    scored_products.sort(key=lambda x: x["relevance_score"], reverse=True)
    return scored_products[:4]


# ---------------------------------------------------------------------------
# Google Gemini Integration (Activates automatically when API key is added)
# ---------------------------------------------------------------------------

def call_gemini_shopping_agent(message: str, catalog: List[Dict[str, Any]], api_key: str) -> Optional[Dict[str, Any]]:
    """Call Google Gemini to extract intent and generate personalized recommendations."""
    try:
        import google.generativeai as genai

        genai.configure(api_key=api_key)
        
        # Use available Gemini models (flash for fast inference)
        model = genai.GenerativeModel(
            model_name="gemini-1.5-flash",
            generation_config={"temperature": 0.3, "top_p": 0.9},
        )

        catalog_summary = [
            {"id": p["id"], "name": p["name"], "category": p["category"], "price": p["price"], "tags": p["tags"][:3]}
            for p in catalog[:25]
        ]

        prompt = f"""
You are ShopMate AI, an expert conversational shopping agent.
Analyze the user's shopping request and available products catalog:

User Request: "{message}"

Available Products Sample:
{json.dumps(catalog_summary, indent=2)}

Respond with STRICT JSON format with NO markdown wrapping:
{{
  "reply": "Friendly 2-sentence conversational assistant response acknowledging their goal",
  "extracted_intent": {{
    "category": "Clothing | Electronics | Beauty | Gifts | Accessories or null",
    "budget_max": integer or null,
    "occasion": "occasion string or null",
    "recipient": "recipient string or null",
    "style": "style string or null",
    "summary": "Brief summary of shopper's intent"
  }},
  "clarification_questions": [
    "Targeted follow-up question 1",
    "Targeted follow-up question 2"
  ],
  "recommended_product_ids": ["P001", "P005"]
}}
"""

        response = model.generate_content(prompt)
        text_resp = response.text.strip()
        # Clean markdown codeblocks if returned
        if text_resp.startswith("```"):
            text_resp = re.sub(r"^```(?:json)?", "", text_resp)
            text_resp = re.sub(r"```$", "", text_resp)
            text_resp = text_resp.strip()

        parsed = json.loads(text_resp)
        return parsed
    except Exception as e:
        print(f"[Gemini Notice] Fallback to local NLP engine due to: {e}")
        return None


# ---------------------------------------------------------------------------
# Unified Public Interface
# ---------------------------------------------------------------------------

def process_shopping_intent(message: str, catalog: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Main processing pipeline:
    1. Checks if Google Gemini API key is configured.
    2. If valid, queries Gemini for structured intent & recommendations.
    3. If no key is set or network fails, seamlessly uses the Smart Local NLP engine.
    Never crashes, ensuring 100% uptime for the user.
    """
    api_key = get_gemini_api_key()

    if api_key:
        gemini_result = call_gemini_shopping_agent(message, catalog, api_key)
        if gemini_result:
            # Map recommended product IDs back to full product objects
            rec_ids = gemini_result.get("recommended_product_ids", [])
            recommended_products = [p for p in catalog if p["id"] in rec_ids]
            
            # If Gemini didn't return enough products, fill from ranker
            if len(recommended_products) < 3:
                local_intent = extract_local_intent(message)
                ranked = rank_and_filter_products(local_intent, catalog)
                for p in ranked:
                    if p["id"] not in [rp["id"] for rp in recommended_products]:
                        recommended_products.append(p)
                    if len(recommended_products) >= 3:
                        break

            return {
                "engine": "Google Gemini (gemini-1.5-flash)",
                "gemini_active": True,
                "reply": gemini_result.get("reply", "Here are the top matches curated for your shopping goal."),
                "extracted_intent": gemini_result.get("extracted_intent", {}),
                "clarification_questions": gemini_result.get("clarification_questions", []),
                "products": recommended_products[:4],
            }

    # Smart Local NLP Engine (Active when no API key is provided)
    local_intent = extract_local_intent(message)
    matched_products = rank_and_filter_products(local_intent, catalog)

    summary_text = local_intent.get("summary") or "your request"
    count = len(matched_products)
    
    reply = (
        f"I found {count} great items matching {summary_text}. "
        f"To personalize this further, check the follow-up suggestions below."
    )

    return {
        "engine": "ShopMate Smart NLP Engine (Local fallback - add GEMINI_API_KEY to activate Gemini)",
        "gemini_active": False,
        "reply": reply,
        "extracted_intent": local_intent,
        "clarification_questions": local_intent.get("clarification_questions", []),
        "products": matched_products,
    }
