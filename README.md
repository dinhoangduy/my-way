# my-way

A lightweight AI-guided learning workflow for project-based engineering practice.

## Current MVP

Backend Guided Mode is usable now for learning Python + FastAPI by building a real backend project step by step.

The learner owns the application source code. The AI owns `.myway/` learning state.

## Install with the CLI

Inside the project you want to learn in, run:

```bash
npx @dinhoangduy/my-way
```

The CLI auto-selects the only available configuration for the current MVP:

```text
Agent:  Antigravity
Domain: Backend
Mode:   Guided
```

It installs the bundled MyWay skill at:

```text
.agents/skills/myway/
```

If the skill already exists, the CLI asks before replacing it. You can explicitly overwrite it with:

```bash
npx @dinhoangduy/my-way --force
```

Do not create `.myway/` yourself. The learning skill creates and maintains it when the learning session starts.

> **Should I commit `.myway/`?** Yes. It stores your learning progress, not chat history. Committing it lets you resume across machines and sessions.

## Start Backend Guided Mode

After installing the skill, open the project in Antigravity and say:

```text
Start backend-guided.
```

If you do not name a project, MyWay chooses a beginner-sized backend project automatically, creates the first requirement, and begins the first guided step.

If you want a specific project, say for example:

```text
Start backend-guided. I want to build a Todo API.
```

On first run, the AI automatically creates:

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

Then it teaches one small step and stops for you to implement it.

## Daily usage

You normally only need short commands:

```text
continue
done
help
hint
review
status
```

`continue` resumes from repository state. `done` makes the AI inspect your current step before advancing. `help` and `hint` keep you on the same step. `review` reviews the active requirement. `status` shows a compact progress snapshot.

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

## Adding new learning frameworks later

MyWay is intentionally designed so future learning domains can be added without rebuilding the core engine.

Examples:

```text
backend-guided
backend-independent
database-design-guided
database-design-independent
system-design-guided
kubernetes-guided
```

The core under `.agents/skills/myway/core/` should remain stable. Domain-specific teaching behavior belongs in a framework. Guided and Independent modes should stay separate because they intentionally provide different levels of help.

When adding a new framework, follow `docs/framework-contract.md`. New frameworks should reuse core bootstrap, recovery, checkpoint, command, and state behavior instead of duplicating it.

A framework must not be exposed in the CLI until its end-to-end learning flow is actually usable.

The project should expand from real learning needs rather than adding many frameworks in advance.

## Development

```bash
npm install
npm test
npm start
```

The CLI package bundles `.agents/skills/myway/` directly, so the installed skill always matches the version shipped with the npm package.

After changing the bundled skill or CLI, bump the npm version before publishing again:

```bash
npm version patch
npm publish --access public
```

## Status

- `backend-guided`: available
- npm CLI: available as `@dinhoangduy/my-way`
- `backend-independent`: planned
- database-design modes: planned

The current priority is to use Backend Guided Mode on real learning projects and improve it from actual friction encountered while learning.
