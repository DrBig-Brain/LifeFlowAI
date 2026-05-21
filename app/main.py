from fastapi import FastAPI
from dotenv import load_dotenv
from app.models import DecideRequest, ScenarioSummary, DecideResponse

load_dotenv()

app = FastAPI(title = "LifeFlowAI", version = "0.1.0")

@app.get("/")
def root():
    return{"status":"LifeFlowAI is running"}

@app.post("/decide", response_model = DecideResponse)
def decide(request: DecideRequest):

    return DecideResponse(
        alternatives = [
            f"Option A for: {request.question}",
            f"Option B for: {request.question}",
            f"Option C for: {request.question}"
        ],
        scenarios = [
            ScenarioSummary(option="Option A", outcome = "Things go well", risk_level="low"),
            ScenarioSummary(option="Option B", outcome = "Mixed Results", risk_level="medium"),
            ScenarioSummary(option="Option C", outcome = "High reward, High risk", risk_level="high"),
        ],
        debate_log = [
            "Optimist: Option A looks promising",
            "Pessimist: Option C looks too risky",
            "Realist: Option B is the safe bet" 
        ],
        recommendation = "Option B",
        reasoning = "Stub reasoning - judge agent not yet connected.",
        
    )