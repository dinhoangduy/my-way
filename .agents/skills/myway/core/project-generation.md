# Project Generation

Backend Guided projects should feel like real products but remain finishable.

## First project

If the learner does not name a project, choose one beginner-friendly domain such as:

- Todo / task manager
- Expense tracker
- Reading tracker
- Habit tracker
- Notes API
- Recipe manager
- Movie collection
- Contact manager

Do not ask the learner to choose unless they explicitly want to.

Avoid domains whose business rules create unnecessary early complexity, such as banking, airlines, hospitals, ERP, trading, or distributed systems.

## Requirement progression

Do not pre-generate or reveal the full roadmap. Maintain only the current requirement plus completed history.

The project progresses through vertical-slice features. Each feature requirement (from REQ-002 onward) must include data design and API design before implementation.

A typical first project follows this shape:

1. **REQ-001 — Project setup**: FastAPI application, SQLAlchemy connection, Alembic initialization, project structure, development server running and connected to a real database.
2. **REQ-002 to REQ-N — Vertical-slice features**: each adds a product capability by cutting through data design → model → migration → schema → endpoint → test. Early features are simple single-entity CRUD. Later features introduce relationships, constraints, validation, and error handling.
3. **Code organization requirement**: when a single file becomes painful, restructure into routers, services, and schemas.
4. **Authentication requirement**: when the product needs accounts, introduce auth as a vertical slice (user table → password hashing → login endpoint → JWT → protected routes).
5. **Production requirement**: Docker, configuration, health check, deployment basics.

This is a capability map, not a fixed checklist. Generate requirements from the chosen product so the technologies feel necessary.

## Scenario-based requirements

Every feature requirement must be framed as a concrete scenario — a short story about a real person doing a real action in the product.

Do not use generic feature names:

- Bad: "Implement book borrowing"
- Bad: "Add CRUD for todos"
- Bad: "Create user authentication"

Use specific, relatable scenarios:

- Good: "A student wants to borrow 'Clean Code' from the library. The system needs to record who borrowed what, when, and the return deadline."
- Good: "A user just finished grocery shopping and wants to add today's expenses so they can track their monthly spending."
- Good: "The librarian needs to log in to confirm returned books. Students need to log in to see which books they currently have."

The scenario should make the learner visualize the user and the action before thinking about tables and endpoints.

## Requirement design

A feature requirement starts with a scenario and is completed through the discovery process (see `core/feature-analysis.md`).

The initial requirement contains:

- **Scenario**: a concrete story about a user performing an action
- **Acceptance criteria**: observable behavior that proves the feature works
- **Learning focus**: concepts this feature teaches or reinforces

The data design and API design sections are filled in collaboratively during the ANALYZING phase, not pre-written by the AI.

Only include implementation guidance appropriate to the learner's current assistance level.

Do not spoil architecture decisions that the learner is ready to make. Do not hide foundational details from a learner who has never seen the concept.

## First feature after setup

REQ-002 should be the simplest useful feature for the chosen product, framed as a scenario.

For a todo manager, the scenario might be: "You just remembered you need to buy groceries. You open the app and want to add 'Buy groceries' as a new task."

The AI then runs the discovery protocol from `core/feature-analysis.md`:

- Ask: "When you add a todo, what information do you want to record?"
- Ask: "Does a todo need anything besides a title? A deadline? A priority?"
- Ask: "How does the app know which todos belong to you?"

The learner's answers, enriched by the AI, become the data design and API design. Then implement step by step: model → migration → schema → endpoint → test.

## Progressive change

Occasionally evolve earlier assumptions after the learner has enough foundation. Examples:

- tasks later need owners (new relationship)
- a resource later needs tags (many-to-many)
- email/password auth later gains another provider
- a delete operation later needs soft-delete semantics (schema migration)
- a list endpoint later needs filtering and pagination

Use change to teach engineering judgment, not to surprise or punish the learner. When revisiting earlier data design, briefly recall the original analysis to show how real projects evolve.
