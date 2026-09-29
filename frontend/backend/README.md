# ShopMate AI — Backend Service

FastAPI-powered conversational shopping agent backend.

## Architecture & Directory Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py          # FastAPI application, CORS middleware, routes
│   └── schemas.py       # Pydantic v2 request/response models
├── requirements.txt     # Python dependencies (FastAPI, Uvicorn, Pydantic)
└── README.md            # Setup and execution instructions
```

## Prerequisites

- Python 3.10+ installed
- pip package manager

## Installation & Setup

1. Open a terminal and navigate to the `backend/` directory:
   ```bash
   cd "backend"
   ```

2. (Optional but recommended) Create and activate a Python virtual environment:
   ```bash
   python -m venv venv
   # On Windows (PowerShell):
   .\venv\Scripts\Activate.ps1
   # On Windows (Command Prompt):
   .\venv\Scripts\activate.bat
   ```

3. Install required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Backend Server

Start the development server with hot-reload enabled on port `8000`:

```bash
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

The service will be live at:
- **API Base URL**: `http://127.0.0.1:8000`
- **Interactive Swagger Docs**: `http://127.0.0.1:8000/docs`
- **Alternative ReDoc UI**: `http://127.0.0.1:8000/redoc`

## API Endpoints

### 1. Health Check
- **Method**: `GET`
- **Path**: `/health`
- **Response**:
  ```json
  {
    "status": "ok",
    "service": "ShopMate AI Backend",
    "version": "0.1.0"
  }
  ```

### 2. Shopping Chat
- **Method**: `POST`
- **Path**: `/chat`
- **Request Body**:
  ```json
  {
    "message": "I need a birthday gift under ₹2000"
  }
  ```
- **Response Body**:
  ```json
  {
    "reply": "I received your shopping request.",
    "message": "I need a birthday gift under ₹2000"
  }
  ```

## Testing via cURL / PowerShell

```powershell
# Test Health
Invoke-RestMethod -Uri "http://127.0.0.1:8000/health" -Method Get

# Test Chat
Invoke-RestMethod -Uri "http://127.0.0.1:8000/chat" -Method Post -ContentType "application/json" -Body '{"message": "I need a birthday gift under ₹2000"}'
```
