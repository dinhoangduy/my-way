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

The project should evolve through needs that naturally introduce backend concepts. A typical first project may encounter:

1. runnable Python/FastAPI application
2. first read endpoint
3. request body and validation
4. in-memory CRUD to understand API behavior
5. persistent storage when in-memory state becomes a limitation
6. SQLAlchemy and migrations
7. constraints/relationships when the product needs them
8. code organization when one file becomes painful
9. meaningful errors and validation
10. authentication/authorization if it fits the product
11. tests for understood behavior
12. configuration, Docker, health check, and basic deployment flow

This is a capability map, not a fixed checklist. Generate requirements from the chosen product so the technologies feel necessary.

## Requirement design

A requirement should contain:

- product/business reason
- observable acceptance criteria
- only the implementation guidance justified by the learner's assistance level

Do not spoil architecture decisions that the learner is ready to make. Do not hide foundational details from a learner who has never seen the concept.

## Progressive change

Occasionally evolve earlier assumptions after the learner has enough foundation. Examples:

- tasks later need owners
- a resource later needs tags
- email/password auth later gains another provider
- a delete operation later needs soft-delete semantics

Use change to teach engineering judgment, not to surprise or punish the learner.
