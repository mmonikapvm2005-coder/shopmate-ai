from pydantic import BaseModel, Field

class ChatRequest(BaseModel):
    message: str = Field(
        ..., 
        description="The user's shopping request or query", 
        min_length=1
    )

    model_config = {
        "json_schema_extra": {
            "example": {
                "message": "I need a birthday gift under ₹2000"
            }
        }
    }

class ChatResponse(BaseModel):
    reply: str = Field(
        default="I received your shopping request.", 
        description="Response reply from ShopMate AI"
    )
    message: str = Field(
        ..., 
        description="Echoed user message"
    )

    model_config = {
        "json_schema_extra": {
            "example": {
                "reply": "I received your shopping request.",
                "message": "I need a birthday gift under ₹2000"
            }
        }
    }

class HealthResponse(BaseModel):
    status: str = "ok"
    service: str = "ShopMate AI Backend"
    version: str = "0.1.0"
