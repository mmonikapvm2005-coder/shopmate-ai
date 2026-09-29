import json
from pathlib import Path
from typing import Optional, List, Dict, Any
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

try:
    from backend.app.llm_service import process_shopping_intent, get_gemini_api_key
except ImportError:
    from app.llm_service import process_shopping_intent, get_gemini_api_key

# 1. Create the FastAPI app instance named exactly "app"
app = FastAPI(
    title="ShopMate AI Backend",
    description="Conversational shopping agent powered by Google Gemini and catalog search",
    version="0.2.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
)

# 2. Configure CORS middleware so the React frontend can make requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "*",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_products_file_path() -> Path:
    """Locates products.json dynamically across different execution directories."""
    current_file = Path(__file__).resolve()
    candidate_paths = [
        current_file.parent.parent / "data" / "products.json",
        current_file.parent.parent.parent / "data" / "products.json",
        Path("../data/products.json"),
        Path("data/products.json"),
        Path("./data/products.json"),
        current_file.parent.parent.parent / "shopmate-ai" / "data" / "products.json",
    ]
    for p in candidate_paths:
        if p.exists() and p.is_file():
            return p
    return current_file.parent.parent.parent / "data" / "products.json"


def load_products_catalog() -> List[Dict[str, Any]]:
    """Helper to safely read product catalog."""
    file_path = get_products_file_path()
    if not file_path.exists():
        raise HTTPException(
            status_code=404,
            detail=f"products.json not found at {file_path}. Please verify data/products.json exists.",
        )
    with open(file_path, "r", encoding="utf-8") as f:
        return json.load(f)


class ChatRequest(BaseModel):
    message: str
    history: Optional[List[Dict[str, Any]]] = None


@app.get("/", tags=["System"])
def root():
    """Root endpoint welcoming the user and listing available endpoints."""
    gemini_key = get_gemini_api_key()
    return {
        "status": "ok",
        "service": "ShopMate AI Backend",
        "llm_connected": bool(gemini_key),
        "llm_engine": "Google Gemini (gemini-1.5-flash)" if gemini_key else "ShopMate Smart NLP Engine (Local fallback)",
        "docs": "/docs",
        "health": "/health",
        "products": "/products",
        "chat": "/chat",
    }


@app.get("/health", tags=["System"])
def health():
    """Health check endpoint."""
    return {"status": "ok"}


@app.get("/products", tags=["Catalog"])
def get_products():
    """Read and return all products from data/products.json."""
    return load_products_catalog()


@app.get("/api/llm-status", tags=["LLM"])
def llm_status():
    """Returns the current active LLM status and setup instructions."""
    key = get_gemini_api_key()
    return {
        "gemini_active": bool(key),
        "engine": "Google Gemini (gemini-1.5-flash)" if key else "ShopMate Smart NLP (Local)",
        "message": (
            "Google Gemini is connected and active!"
            if key
            else "Running in Smart Local NLP mode. To activate real Google Gemini, paste your free Gemini API key into backend/.env (GEMINI_API_KEY=your_key)."
        ),
        "free_api_key_url": "https://aistudio.google.com/app/apikey"
    }


@app.post("/chat", tags=["Agent"])
@app.post("/api/chat", tags=["Agent"])
def chat_endpoint(request: ChatRequest):
    """
    Core AI Shopping Agent endpoint:
    1. Analyzes user shopping prompt.
    2. Extracts structured shopping intent (budget, category, occasion, recipient).
    3. Formulates follow-up clarification questions.
    4. Ranks & recommends matching products from catalog.
    5. Uses Google Gemini if GEMINI_API_KEY is configured, or Smart Local NLP fallback.
    """
    if not request.message or not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty.")

    catalog = load_products_catalog()
    result = process_shopping_intent(request.message, catalog)
    return result
