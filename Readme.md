# LifeFlow AI

LifeFlow AI is an experimental decision support system that uses large language models and agent-based reasoning to help users evaluate choices, simulate future outcomes, and produce a reasoned recommendation.

## What this project is

LifeFlow AI is built around a multi-agent architecture that transforms a question or decision prompt into:
- simulated future scenarios,
- a debate between varied reasoning voices,
- a judged recommendation informed by the dialogue and memory.

The goal is to help users make better decisions by letting the system explore multiple paths, compare outcomes, and explain its reasoning.

## Core features

- **Decision intake**: Accepts user questions or decisions through an API endpoint.
- **Simulation engine**: Generates multiple possible future scenarios for each option.
- **Agent debate**: Uses multiple agent personalities (optimist, pessimist, realist, judge) to examine tradeoffs.
- **Memory support**: Stores past decisions and preferences so future recommendations can be personalized.
- **Structured output**: Returns JSON with alternatives, scenario summaries, debate logs, and a final recommendation.

## Architecture overview

- **Backend**: Python + FastAPI
- **LLM integration**: OpenAI-compatible model access through a wrapper layer
- **Agents**:
  - Planner Agent: proposes alternatives and decision steps
  - Simulation Agent: creates potential future outcomes
  - Debate Agents: analyze options from different perspectives
  - Judge Agent: synthesizes findings into a recommendation
- **Memory**: optional vector store for historical decisions and preference context
- **Frontend**: planned React + Tailwind UI for interactive decision exploration

## Why this project exists

Many decisions feel uncertain because the future is hard to imagine and different perspectives are missing. LifeFlow AI aims to make uncertainty more tangible by using AI to generate multiple futures, compare them, and explain the reasoning behind its choice.

## Getting started

1. Create a Python virtual environment
2. Install backend dependencies
3. Configure your OpenAI API key
4. Run the FastAPI app

A simple `POST /decide` endpoint is planned to receive input and return decision support output.

## Future direction

Potential improvements include:
- a richer user interface,
- stronger personalization with memory,
- advanced scoring models,
- deployment to cloud platforms for easy access.

## Project status

This repository is currently focused on building the backend decision engine and agent orchestration layer. The frontend and full deployment are next-stage goals.
