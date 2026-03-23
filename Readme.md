# 🚀 LifeFlow AI — Development TODOs

## 🟢 Phase 1: Foundation (MVP)

### Backend Setup
- [ ] Initialize project (Python + FastAPI)
- [ ] Create virtual environment
- [ ] Install dependencies (fastapi, uvicorn, openai, pydantic)
- [ ] Setup folder structure

### LLM Integration
- [ ] Add OpenAI API key support
- [ ] Create base LLM wrapper

### Agents
- [ ] Implement Planner Agent
- [ ] Implement Judge Agent

### API
- [ ] Create POST /decide endpoint
- [ ] Connect agents to API

---

## 🟡 Phase 2: Simulation Engine

- [ ] Implement Simulation Agent
- [ ] Generate 3–5 future paths
- [ ] Add scoring logic for each path
- [ ] Return structured JSON response

---

## 🔵 Phase 3: Debate System

- [ ] Implement Optimist Agent
- [ ] Implement Pessimist Agent
- [ ] Implement Realist Agent
- [ ] Create debate loop (multi-round)
- [ ] Store debate logs
- [ ] Feed debate to Judge Agent

---

## 🟣 Phase 4: Memory

- [ ] Setup vector DB (FAISS / Chroma)
- [ ] Store past decisions
- [ ] Retrieve relevant preferences
- [ ] Inject memory into prompts

---

## 🟠 Phase 5: Frontend

- [ ] Setup React + Tailwind
- [ ] Create input UI
- [ ] Display:
  - simulated futures
  - debate logs
  - final recommendation

---

## 🔴 Phase 6: Advanced

- [ ] Add ML scoring model (scikit-learn)
- [ ] Add Bayesian reasoning (optional)
- [ ] Improve personalization

---

## ⚫ Phase 7: Deployment

- [ ] Deploy backend (Render / AWS)
- [ ] Deploy frontend (Vercel)
- [ ] Add logging
- [ ] Write README + architecture diagram

---

## ✅ Definition of Done

- [ ] User inputs decision
- [ ] System generates futures
- [ ] Agents debate
- [ ] Final recommendation generated
- [ ] System remembers user (optional)
