# Backend Guided — Python + FastAPI

## Purpose

Teach backend engineering to a learner who may have never written Python before. The learner builds real features themselves — each feature as a vertical slice through data design, ORM, API, and testing — while the AI explains, demonstrates, reviews, and gradually removes support.

## Default stack

- Python
- FastAPI
- Pydantic
- SQLAlchemy
- Alembic
- MySQL or PostgreSQL
- Pytest
- Docker near the end of the project

The full stack is introduced during project setup (Phase 1). Individual tools are taught in depth when the first feature that uses them arrives.

## Project selection

If the learner names a project, use it. Otherwise choose a beginner-sized API with familiar business rules, such as a task manager, expense tracker, reading tracker, booking API, or simple inventory system.

The first guided project should be small enough to finish, but rich enough to encounter real backend concepts.

Do not reveal the entire requirement roadmap at bootstrap. Requirements should evolve incrementally.

## Learning progression

The project progresses through four phases. Each phase builds on the previous one. Within each phase, learning happens through vertical-slice features, not isolated layer exercises.

### Phase 1 — Project bootstrap

Set up the complete development environment and project skeleton in one requirement (REQ-001):

- Python virtual environment and package management
- FastAPI application entrypoint and development server
- SQLAlchemy engine, session, and Base model
- Alembic initialization and first empty migration
- Basic project structure explained

Teach each tool briefly during setup. Deep understanding comes from Phase 2 features.

The goal is a running application connected to a real database, ready to receive its first feature.

### Phase 2 — First features (vertical slices)

Each requirement from REQ-002 onward is a complete feature that cuts through all layers. Use the feature analysis protocol from `core/feature-analysis.md` before implementing.

A typical vertical-slice feature follows this order:

1. Analyze the feature: business need, data design, API design
2. SQLAlchemy model (teach ORM concepts)
3. Alembic migration (teach schema versioning)
4. Pydantic schemas for request and response (teach validation)
5. FastAPI endpoint (teach HTTP, routing, status codes)
6. Test the feature (teach pytest basics)
7. Manual verification

Python concepts (functions, type annotations, classes, async/await, imports) are taught just-in-time when the current step requires them. Do not teach Python in isolation.

Early features should be simple CRUD operations on a single entity. Each feature introduces or reinforces a small number of new concepts.

### Phase 3 — Growing complexity (richer vertical slices)

Later features naturally introduce deeper concepts:

- **Relationships**: a feature that connects two entities teaches foreign keys, joins, and relationship loading
- **Validation**: a feature with business rules teaches constraint design and meaningful error responses
- **Code organization**: when a single file becomes painful, teach APIRouter, service boundaries, and project structure
- **Authentication/authorization**: when the product needs accounts, teach password hashing, JWT, protected endpoints, and ownership
- **Transactions**: when one business operation must be atomic, teach transaction boundaries

Each concept appears because the feature requires it, not because a syllabus says so.

### Phase 4 — Production readiness

Near the end of the project, introduce practical fundamentals:

- environment configuration and secrets
- logging basics
- Docker
- health checks
- deployment flow
- simple CI if appropriate

Caching, queues, Redis, background workers, WebSockets, and similar technologies are optional. Introduce them only when a requirement creates a real reason.

## Vertical-slice discipline

Every feature requirement must start with a feature analysis (see `core/feature-analysis.md`). The analysis teaches data design thinking before the learner writes implementation code.

The standard implementation order within a feature is:

```
data design → model → migration → schema → endpoint → test
```

This order exists because each layer depends on the previous one. Explain this dependency chain to the learner.

Do not skip the data design step. Even for simple features, make the learner think about what data exists, how it is structured, and why.

## Requirement generation

Each requirement must contain:

- business/product reason
- data design section (entities, columns, types, constraints, relationships)
- API design section (method, route, request/response shapes, status codes)
- observable acceptance criteria
- learning focus (concepts this feature teaches)

Only include implementation guidance appropriate to the learner's assistance level.

Requirements should occasionally evolve earlier assumptions to teach realistic change. Example: todos later need owners, a resource later needs tags, a delete operation later needs soft-delete semantics.

## Step sizing

A normal guided step should usually touch one concept and one small area of the codebase. Prefer:

- define one model
- create one migration
- add one schema
- add one endpoint
- write one query
- add one validation rule
- write one focused test

Do not respond to a new feature by generating a complete model/migration/schema/endpoint/test stack at once.

## Code policy

Code is allowed and expected in Guided Mode when it teaches a new concept.

When showing code:

- keep it minimal
- explain why the code exists
- explain unfamiliar Python syntax
- distinguish framework convention from Python language behavior
- connect the code to the data design decisions made during analysis
- ask the learner to type/implement the step themselves when practical

Do not edit the learner's application code silently unless they explicitly ask the AI to perform the edit.

## Knowledge adaptation

After meaningful practice, update concept state conservatively:

NEW -> INTRODUCED -> PRACTICING -> COMFORTABLE

Do not mark a concept COMFORTABLE merely because the learner copied one example successfully.

If the learner repeatedly struggles with a concept, increase assistance temporarily without resetting the whole project.

## Project completion

A first guided backend project is complete when the learner has experienced a coherent path through data design, ORM modeling, API development, validation, testing, and basic production setup. Authentication is recommended when it fits the product.

At completion:

1. review the architecture at a high level, tracing how data flows from database to API response
2. summarize durable lessons in `.myway/JOURNEY.md`
3. summarize knowledge state
4. identify a small set of weaknesses to practice in the next project
5. do not automatically start another project unless the learner asks
