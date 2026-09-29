# ShopMate AI Backend

A lightweight, beginner-friendly FastAPI backend for ShopMate AI.

## Project Structure

```
Product Management/
├── frontend/              # React + Vite + Tailwind CSS frontend
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   └── main.py       # FastAPI app with /health and /products
│   ├── requirements.txt   # Python dependencies
│   └── README.md
└── data/
    └── products.json      # Dynamic product catalog (JSON format)
```

## Setup & Installation

Ensure you have Python 3.10+ installed.

From the project root:

```powershell
pip install -r backend/requirements.txt
```

## Running the Backend

From the project root (`Product Management`):

```powershell
python -m uvicorn backend.app.main:app --reload --host 127.0.0.1 --port 8000
```

Alternatively, from the `backend/` folder:

```powershell
cd backend
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

## Available Endpoints

- **GET /health**:
  Verifies backend health status.
  Returns: `{"status": "ok"}`

- **GET /products**:
  Reads and dynamically returns the product catalog from `../data/products.json`.

- **Swagger Documentation**:
  Interactive API docs are available at:
  [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
