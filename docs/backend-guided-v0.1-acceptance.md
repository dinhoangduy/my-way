# Backend Guided v0.1 — Acceptance Contract

This document defines when the current MVP is considered usable.

## Scenario A — First run, no project named

Given an otherwise empty learning project containing `.agents/skills/myway/`

When the learner says:

```text
Start backend-guided.
```

Then MyWay must:

1. detect that `.myway/` does not exist
2. choose an appropriate beginner backend project automatically
3. create `.myway/` state
4. create only the first active requirement, not the whole hidden roadmap
5. introduce the project briefly
6. teach the minimum prerequisite for Step 1
7. give exactly one concrete learner action
8. stop without generating the finished application

## Scenario B — First run, project named

When the learner says:

```text
Start backend-guided. I want to build a Todo API.
```

MyWay must use Todo API rather than replacing it with a random project.

## Scenario C — Resume

Given `.myway/` already exists

When the learner says `Start backend-guided`, `Start`, or `Continue`

MyWay must recover the existing project and continue from the current step. It must not initialize a new project or reset learning state.

## Scenario D — Step completion

When the learner says `Done`, MyWay must inspect the actual current result before advancing. A failed or incomplete step stays active.

## Scenario E — Help without takeover

When the learner says `Help`, `I'm stuck`, or `Hint`, MyWay must address the current blocker while remaining on the same step. Assistance should escalate gradually and should not silently implement the whole feature.

## Scenario F — New concept

When a required concept is `NEW` or fragile `INTRODUCED`, MyWay should:

1. explain the mental model
2. show the smallest useful code example when appropriate
3. explain unfamiliar syntax
4. give one small implementation action
5. stop

## Scenario G — Practiced concept

When a concept is `PRACTICING`, MyWay should prefer structure, hints, signatures, or pseudocode over complete code.

When `COMFORTABLE`, MyWay should prefer requirement + learner implementation + review.

## Scenario H — Persistence discipline

Normal questions and debugging conversation must not be copied into `.myway/` as a transcript. Persist only meaningful checkpoints and durable learning information.

## Scenario I — First project breadth

A coherent first project should naturally expose the learner to the useful subset of:

- Python fundamentals needed by the project
- FastAPI and HTTP
- Pydantic validation
- persistence and relational database fundamentals
- SQLAlchemy
- Alembic
- error handling and project organization
- authentication/authorization when appropriate
- Pytest
- environment/configuration basics
- Docker and basic production/deployment flow

The exact sequence is project-driven rather than a rigid tutorial syllabus.

## Definition of done

Backend Guided v0.1 succeeds when a learner who starts with no Python experience can make sustained progress through their first backend project using normal commands such as `Start backend-guided`, `Continue`, `Done`, `Help`, `Hint`, `Review`, and `Status`, without manually maintaining learning state.
