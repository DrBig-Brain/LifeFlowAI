import json
import os
from datetime import datetime

MEMORY_FILE = "memory.json"

def _load_memory() -> list[dict]:
    if not os.path.exists(MEMORY_FILE):
        return []
    with open(MEMORY_FILE,"r") as f:
        return json.load(f)
    
def _save_memory(memory: list[dict]) -> None:
    with open(MEMORY_FILE,"w") as f:
        json.dump(memory, f, indent=2)

def save_decision(
        decision_id: str,
        user_id: str,
        question: str,
        recommendation: str,
        reasoning: str,
) -> None:
    memory = _load_memory()
    memory.append({
        "decision_id":decision_id,
        "user_id":user_id or "anonymous",
        "question":question,
        "recommendation":recommendation,
        "reasoning":reasoning,
        "timestamp":datetime.now().isoformat(),
    })
    _save_memory(memory)

def get_past_decision(user_id:str | None, limit: int = 5) -> list[dict]:
    memory = _load_memory()
    uid = user_id or "anonymous"
    user_memory = [m for m in memory if m["user_id"] == uid]
    return user_memory[-limit:]