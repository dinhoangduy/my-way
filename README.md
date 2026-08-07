# my-way

A lightweight AI-guided learning workflow for project-based engineering practice.

## MVP

The first version focuses on Backend Guided Mode: learn Python + FastAPI by building a real project step by step, while the AI maintains project-learning state automatically.

## How it works

1. Start with an empty project.
2. Install/copy the MyWay skill into `.agents/skills/myway/`.
3. Open the project in Antigravity.
4. Start Backend Guided Mode.
5. The AI creates and maintains `.myway/` automatically.

The learner owns the source code. The AI owns `.myway/`.

## Core principles

- Learn through real projects, not isolated tutorials.
- Teach new concepts before delegating them.
- Break work into small, understandable steps.
- Never dump large multi-file implementations in Guided Mode.
- Persist only meaningful learning checkpoints.
- Do not use `.myway/` as chat history.
- Source code is the source of truth for implementation state.

## Current scope

- `backend-guided`
- `backend-independent` is planned but intentionally kept secondary until Guided Mode is battle-tested.
