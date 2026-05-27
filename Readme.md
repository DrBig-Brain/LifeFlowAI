# LifeFlowAI

LifeFlowAI is a modular decision‑making service that composes specialised agents (planner, simulator, debate, judge) to help users evaluate alternatives and produce recommendations with reasoning. It exposes a FastAPI backend and a React + Vite frontend client.

**Key features**
- Planner: generates concrete alternatives for a decision using an LLM.
- Simulator: synthesizes scenario outcomes for each alternative.
- Debate: creates a structured debate/log between perspectives on scenarios.
- Judge: produces a final recommendation and reasoning, optionally using past decisions from memory.
- Simple auth and memory layers for per-user persistence.

**Repository layout**
- `app/` — Backend FastAPI service and agents
	- `main.py` — FastAPI application and `/decide` endpoint
	- `models.py` — Pydantic request/response models
	- `agents/` — Agent implementations: `planner.py`, `simulator.py`, `debate.py`, `judge.py`
	- `auth/` — Authentication routes and utilities
	- `memory/` — Persistent decision store helpers
- `client/` — React + Vite frontend
- `test_*.py` — Pytest unit/integration tests

Getting started
---------------

Prerequisites
- Python 3.10+ (for typing features used in the code)
- Node 16+ / npm or yarn to run the frontend
- Access to an LLM provider and API key used by the agents (see `XAI_API_KEY` env var used in `app/agents/planner.py`)

Backend (API)
1. Create and activate a virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate
```

2. Install Python dependencies (add your dependencies to `requirements.txt` if not present):

```bash
pip install -r requirements.txt
```

3. Set required environment variables (example):

```bash
export XAI_API_KEY="your-api-key-here"
```

4. Run the FastAPI server (using `uvicorn`):

```bash
uvicorn app.main:app --reload
```

This starts the API at `http://127.0.0.1:8000`.

API endpoints
- `GET /` — health/status ping
- `POST /decide` — main decision endpoint. Accepts a JSON payload matching the `DecideRequest` model in `app/models.py` and returns a `DecideResponse` containing alternatives, scenarios, debate log, and a recommendation.

Example request schema
```json
{
	"question": "Should I take a job offer in another city?",
	"context": "I have young kids and a mortgage.",
	"user_id": "user-123"
}
```

Frontend (client)
1. Change into the client folder and install dependencies:

```bash
cd client
npm install
```

2. Run the development server:

```bash
npm run dev
```

Testing
-------
Run the Python tests with `pytest` from the repository root:

```bash
pytest -q
```

Notes & configuration
---------------------
- The agents call external LLM services (see `app/agents/*.py`). Set API keys as environment variables before running.
- `app/models.py` defines `DecideRequest` and `DecideResponse` for request validation and response structure.
- The planner agent (`app/agents/planner.py`) currently uses `langchain_groq.ChatGroq` and expects `XAI_API_KEY` in the environment.
- Add or pin real dependencies in `requirements.txt` for reproducible installs.

Contributing
------------
- Implement additional agent strategies by adding modules under `app/agents/` and wiring them into `app/main.py`.
- Keep tests next to top-level test files (e.g., `test_planner.py`, `test_simulator.py`).

License
-------
This repository does not include a license file. Add a `LICENSE` if you plan to open source the project.

Contact
-------
Open issues or feature requests on the repository tracker.

