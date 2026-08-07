# my-way

A lightweight AI-guided learning workflow for project-based engineering practice.

## Current MVP

Backend Guided Mode is usable now for learning Python + FastAPI by building a real backend project step by step.

The learner owns the application source code. The AI owns `.myway/` learning state.

## Install into a learning project

For now, copy this folder from the repository:

```text
.agents/skills/myway/
```

into the project you want to learn inside, preserving the same path.

Your learning project should look like:

```text
my-backend-project/
└── .agents/
    └── skills/
        └── myway/
            ├── SKILL.md
            ├── core/
            └── frameworks/
```

Do not create `.myway/` yourself. MyWay creates it automatically.

## Start Backend Guided Mode

Open the learning project in Antigravity and say:

```text
Start backend-guided. I want to build a Todo API.
```

You may replace `Todo API` with your own project idea. If you do not name a project, MyWay chooses a beginner-sized backend project.

On first run, the AI should automatically create:

```text
.myway/
├── PROJECT.md
├── CURRENT.md
├── KNOWLEDGE.md
├── JOURNEY.md
├── requirements/
├── reviews/
└── decisions/
```

Then it should teach the first small step and stop for you to implement it.

## Daily usage

You normally only need natural short commands:

```text
continue
done
help
hint
review
```

`continue` resumes from repository state. `done` makes the AI inspect your current step before advancing. `help` and `hint` keep you on the same step. `review` reviews the active requirement.

You never need to manually update `.myway/`.

## Guided behavior

When a concept is new, MyWay explains the mental model, shows a small relevant code example, explains unfamiliar Python/FastAPI syntax, and gives you one small step to perform.

As you gain experience, assistance decreases from teaching with code, to hints/pseudocode, to independent implementation and review.

It must not respond to a requirement by silently generating an entire router/service/repository/model/test stack.

## Backend Guided learning path

The exact order adapts to the project, but the first project can naturally cover:

- Python fundamentals used by the project
- FastAPI application and routes
- HTTP and request/response validation
- Pydantic
- database persistence
- SQLAlchemy
- Alembic migrations
- project organization and business logic boundaries
- authentication/authorization when appropriate
- testing with Pytest
- configuration and environment variables
- Docker and basic production/deployment concepts

Technologies are introduced when the project creates a reason to learn them, not as a giant tool list at the beginning.

## Learning-state rules

MyWay persists only meaningful checkpoints. Normal questions, debugging conversations, and explanations are not copied into `.myway/` as chat history.

Source code remains the source of truth for implementation details. `.myway/` stores learning state, progress, important mistakes, requirements, and non-obvious decisions.

## Status

- `backend-guided`: available
- `backend-independent`: later
- database-design modes: later

The current priority is to use Backend Guided Mode on real learning projects and improve it from actual friction encountered while learning.
