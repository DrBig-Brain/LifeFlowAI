from fastapi import FastAPI, HTTPException
from dotenv import load_dotenv
from app.models import DecideRequest, ScenarioSummary, DecideResponse
from app.agents.planner import run_planner

load_dotenv()

app = FastAPI(title = "LifeFlowAI", version = "0.1.0")

@app.get("/")
def root():
    return{"status":"LifeFlowAI is running"}

@app.post("/decide", response_model = DecideResponse)
def decide(request: DecideRequest):
    try:
        alternatives = run_planner(request.question,request.context)
    except Exception as e:
        raise HTTPException(status_code = 500, detail = f"planner agent failed: {str(e)}")
    
    return DecideResponse(
        alternatives = alternatives,
        scenarios = [ScenarioSummary(option = alt, outcome = "coming soon", risk_level="medium")
        for alt in alternatives],
        debate_log = ["Debate agent is not yet connected"],
        recommendation = "coming soon",
        reasoning = "Judge agent not yet connected.",
    )
