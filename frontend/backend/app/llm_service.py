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
# Smart Local Rule-Based NLP & Mood Intelligence Engine
# ---------------------------------------------------------------------------

MOOD_DEFINITIONS = {
    "chill": {
        "emoji": "🧘",
        "title": "Chill & Cozy",
        "keywords": ["chill", "relax", "unwind", "tired", "stressed", "cozy", "comfort", "lounge", "calm", "peace", "lazy", "soothe"],
        "advice": "Prioritizing soft natural fabrics, aromatherapy scents, and unrestrictive comfort."
    },
    "energetic": {
        "emoji": "⚡",
        "title": "High Energy",
        "keywords": ["energy", "energetic", "gym", "workout", "fitness", "active", "running", "pump", "motivated", "sports", "cardio"],
        "advice": "Prioritizing durable sweat-wicking mobility, sports audio, and active hydration."
    },
    "romantic": {
        "emoji": "✨",
        "title": "Romantic & Date Night",
        "keywords": ["romantic", "date", "date night", "dinner", "girlfriend", "anniversary", "captivating", "seductive", "evening look", "fragrance"],
        "advice": "Prioritizing captivating olfactory notes, refined metallic timepieces, and sophisticated evening silhouettes."
    },
    "adventurous": {
        "emoji": "🌿",
        "title": "Wanderlust & Travel",
        "keywords": ["travel", "adventure", "wanderlust", "goa", "trip", "vacation", "explore", "beach", "holiday", "coastal", "island"],
        "advice": "Prioritizing ultra-breathable French flax linen, UV400 defense, and weather-tested versatility."
    },
    "productive": {
        "emoji": "🎯",
        "title": "Deep Work & Focus",
        "keywords": ["focus", "productive", "deep work", "work", "office", "study", "minimalist", "tech", "desk", "laptop", "card case"],
        "advice": "Prioritizing 35dB active noise cancellation and minimalist Italian leather daily carry."
    },
    "celebratory": {
        "emoji": "🎁",
        "title": "Celebratory & Gifting",
        "keywords": ["celebrate", "celebration", "milestone", "gift", "surprise", "birthday", "friend", "joyful", "happy"],
        "advice": "Prioritizing high perceived value, luxury display packaging, and milestone keepsakes."
    }
}

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
    """Extract shopping intent and MOOD using pattern recognition when LLM key is absent."""
    lower_text = text.lower()
    budget_max = extract_budget(text)

    # 1. Detect Mood
    detected_mood = None
    mood_emoji = "✨"
    mood_title = None

    for m_id, m_data in MOOD_DEFINITIONS.items():
        if any(kw in lower_text for kw in m_data["keywords"]):
            detected_mood = m_id
            mood_emoji = m_data["emoji"]
            mood_title = m_data["title"]
            break

    # 2. Detect category
    detected_categories = []
    for cat, keywords in CATEGORY_KEYWORDS.items():
        if any(kw in lower_text for kw in keywords):
            detected_categories.append(cat)
    
    primary_category = detected_categories[0] if detected_categories else None

    # 3. Detect occasions
    detected_occasions = [occ for occ in OCCASIONS if occ in lower_text]

    # 4. Detect recipient
    detected_recipient = None
    for rec in RECIPIENTS:
        if rec in lower_text:
            detected_recipient = rec
            break

    # 5. Detect style keywords
    styles = ["casual", "formal", "minimalist", "resort", "vintage", "sporty", "coastal"]
    detected_style = next((s for s in styles if s in lower_text), "casual")

    # 6. Detect color constraints
    avoid_bright = any(p in lower_text for p in ["don't like bright", "no bright", "avoid bright", "subtle colors", "neutral colors", "dark colors", "earthy"])

    # 7. Generate tailored clarification questions (mood-aware)
    clarifications = []
    if detected_mood == "chill":
        clarifications.append("Would you like sensory relaxation (aromatherapy & candles) or cozy loungewear (waffle knit & linen)?")
        clarifications.append("Do you have a target spending limit (e.g. under ₹2,000 or under ₹3,500)?")
    elif detected_mood == "romantic":
        clarifications.append("What element anchors the date night—a signature fragrance, a sleek timepiece, or evening apparel?")
        clarifications.append("Are you shopping for men's styling, women's styling, or unisex gifting?")
    elif detected_mood == "energetic":
        clarifications.append("Are you prioritizing noise-cancelling workout audio, active movement shorts, or high-durability accessories?")
    elif "gift" in lower_text or primary_category == "Gifts":
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
        "detected_mood": detected_mood,
        "mood_emoji": mood_emoji,
        "mood_title": mood_title,
        "summary": f"{f'[{mood_emoji} {mood_title}] ' if mood_title else ''}Looking for {primary_category or 'items'} {f'for {detected_recipient}' if detected_recipient else ''} {f'for {detected_occasions[0]}' if detected_occasions else ''} {f'under ₹{budget_max:,}' if budget_max else ''}".strip(),
    }


def rank_and_filter_products(intent: Dict[str, Any], catalog: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """Score and rank catalog products according to extracted intent and MOOD constraints."""
    scored_products = []
    category = intent.get("category")
    budget_max = intent.get("budget_max")
    occasions = intent.get("occasions", [])
    avoid_bright = intent.get("avoid_bright_colors", False)
    detected_mood = intent.get("detected_mood")

    for p in catalog:
        score = 0
        reasons = []

        # 1. Mood compatibility boost (+25 points!)
        p_moods = p.get("moods", [])
        if detected_mood and detected_mood in p_moods:
            score += 25
            m_title = MOOD_DEFINITIONS.get(detected_mood, {}).get("title", detected_mood.capitalize())
            reasons.append(f"Specially aligned with your '{m_title}' mood")

        # 2. Category matching
        if category:
            if p.get("category") == category:
                score += 35
                reasons.append(f"Matches category '{category}'")
            elif category == "Gifts":
                if any(t in ["gift", "gift set", "artisan", "leather", "curated"] for t in p.get("tags", [])):
                    score += 25
                    reasons.append("Popular thoughtful gift choice")
        else:
            score += 10

        # 3. Budget constraint
        price = p.get("price", 0)
        if budget_max:
            if price <= budget_max:
                score += 30
                reasons.append(f"Well within your ₹{budget_max:,} budget")
            elif price <= budget_max * 1.15:
                score += 10
            else:
                score -= 50
        else:
            score += 15

        # 4. Occasion matching
        p_occasions = [occ.lower() for occ in p.get("occasion", [])]
        for occ in occasions:
            if occ in p_occasions or any(occ in tag for tag in p.get("tags", [])):
                score += 20
                reasons.append(f"Ideal for {occ}")

        # 5. Color / style constraints
        if avoid_bright:
            p_colors = [c.lower() for c in p.get("colors", [])]
            bright_shades = ["neon", "bright yellow", "hot pink", "orange", "crimson"]
            if any(b in " ".join(p_colors) for b in bright_shades):
                score -= 30
            else:
                score += 10
                reasons.append("Subtle & neutral color palette")

        # 6. Rating boost
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
# Google Gemini Integration (Mood-Aware)
# ---------------------------------------------------------------------------

def call_gemini_shopping_agent(message: str, catalog: List[Dict[str, Any]], api_key: str) -> Optional[Dict[str, Any]]:
    """Call Google Gemini to extract mood, intent, and generate personalized recommendations."""
    try:
        import google.generativeai as genai

        genai.configure(api_key=api_key)
        
        model = genai.GenerativeModel(
            model_name="gemini-1.5-flash",
            generation_config={"temperature": 0.3, "top_p": 0.9},
        )

        catalog_summary = [
            {"id": p["id"], "name": p["name"], "category": p["category"], "price": p["price"], "tags": p["tags"][:3], "moods": p.get("moods", [])}
            for p in catalog[:25]
        ]

        prompt = f"""
You are ShopMate AI, an expert emotional and conversational shopping agent.
Analyze the user's shopping request, emotional mood, and catalog:

User Request: "{message}"

Available Products Sample:
{json.dumps(catalog_summary, indent=2)}

Respond with STRICT JSON format with NO markdown wrapping:
{{
  "reply": "Empathetic, friendly 2-sentence conversational assistant response acknowledging their goal & mood",
  "extracted_intent": {{
    "category": "Clothing | Electronics | Beauty | Gifts | Accessories or null",
    "budget_max": integer or null,
    "occasion": "occasion string or null",
    "recipient": "recipient string or null",
    "style": "style string or null",
    "detected_mood": "chill | energetic | romantic | adventurous | productive | celebratory or null",
    "mood_vibe": "Human readable mood description",
    "summary": "Brief summary of shopper's intent and vibe"
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
    Main processing pipeline with Mood Intelligence:
    1. Checks if Google Gemini API key is configured.
    2. If valid, queries Gemini for structured intent, mood & recommendations.
    3. If no key is set or network fails, seamlessly uses the Smart Local NLP engine with mood detection.
    """
    api_key = get_gemini_api_key()

    if api_key:
        gemini_result = call_gemini_shopping_agent(message, catalog, api_key)
        if gemini_result:
            rec_ids = gemini_result.get("recommended_product_ids", [])
            recommended_products = [p for p in catalog if p["id"] in rec_ids]
            
            if len(recommended_products) < 3:
                local_intent = extract_local_intent(message)
                ranked = rank_and_filter_products(local_intent, catalog)
                for p in ranked:
                    if p["id"] not in [rp["id"] for rp in recommended_products]:
                        recommended_products.append(p)
                    if len(recommended_products) >= 3:
                        break

            return {
                "engine": "Google Gemini (gemini-1.5-flash) with Mood Intelligence",
                "gemini_active": True,
                "reply": gemini_result.get("reply", "Here are the top matches curated for your shopping goal."),
                "extracted_intent": gemini_result.get("extracted_intent", {}),
                "clarification_questions": gemini_result.get("clarification_questions", []),
                "products": recommended_products[:4],
            }

    # Smart Local NLP & Mood Engine
    local_intent = extract_local_intent(message)
    matched_products = rank_and_filter_products(local_intent, catalog)

    summary_text = local_intent.get("summary") or "your request"
    count = len(matched_products)
    mood_title = local_intent.get("mood_title")
    mood_emoji = local_intent.get("mood_emoji", "")
    
    if mood_title:
        reply = (
            f"I sense your {mood_emoji} **{mood_title}** mood! I found {count} items that match your feeling and {summary_text}. "
            f"Check the tailored options and follow-up suggestions below."
        )
    else:
        reply = (
            f"I found {count} great items matching {summary_text}. "
            f"To personalize this further, check the follow-up suggestions below."
        )

    return {
        "engine": "ShopMate Smart NLP & Mood Engine (Local fallback)",
        "gemini_active": False,
        "reply": reply,
        "extracted_intent": local_intent,
        "clarification_questions": local_intent.get("clarification_questions", []),
        "products": matched_products,
    }
