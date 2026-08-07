# State Templates

Use these shapes when bootstrapping `.myway/`. Keep them concise and adapt values to the actual project.

## PROJECT.md

```md
# Project

Name: <project name>
Framework: backend-guided
Language: Python
Runtime: FastAPI
Protocol: 1
Status: ACTIVE

## Goal
<one paragraph describing the product>

## Current capabilities
- <only completed meaningful capabilities>

## Completed requirements
- <REQ ids and titles>
```

## CURRENT.md

```md
# Current

Requirement: REQ-001 — <title>
Status: NEW
Step: 1

## Goal
<small current goal>

## Next learner action
<one concrete action>

## Relevant files
- <paths if any>

## Blocker
None
```

## KNOWLEDGE.md

```md
# Knowledge

## Data Design
- relational-model: NEW
- primary-keys: NEW
- column-types: NEW
- constraints: NEW
- relationships: NEW
- normalization: NEW

## ORM (SQLAlchemy)
- models: NEW
- sessions: NEW
- queries: NEW
- migrations: NEW
- transactions: NEW

## API (FastAPI)
- app-and-server: NEW
- routes: NEW
- request-validation: NEW
- response-models: NEW
- dependency-injection: NEW
- error-handling: NEW

## Python
- functions: NEW
- type-annotations: NEW
- classes: NEW
- async-await: NEW

## Testing
- pytest: NEW
- api-tests: NEW
```

Add concepts only when useful. Do not grow this into an encyclopedia.

## JOURNEY.md

```md
# Learning Journey

Project started: <date if known>

<!-- Append meaningful milestones only. -->
```

## Requirement file — setup (REQ-001)

Path: `.myway/requirements/REQ-001-project-setup.md`

```md
# REQ-001 — Project setup

Status: NEW

## Business need
Establish the development environment and project skeleton so the first feature can be built.

## Acceptance criteria
- FastAPI development server runs
- Database connection works
- Alembic is initialized and can run migrations
- Project structure is in place

## Learning focus
Python virtual environment, FastAPI basics, SQLAlchemy connection, Alembic setup
```

## Requirement file — feature (REQ-002+)

Path: `.myway/requirements/REQ-002-<slug>.md`

The initial requirement contains only the scenario, acceptance criteria, and learning focus. The data design and API design sections are filled in collaboratively during the ANALYZING phase through the discovery protocol.

```md
# REQ-002 — <title>

Status: NEW

## Scenario
<a concrete story about a real person doing a real action in the product>

## Acceptance criteria
- <observable behavior>
- <observable behavior>

## Learning focus
<concepts this feature teaches or reinforces>

## Discovery summary
(Filled during ANALYZING phase — co-created by learner and AI)

### Data design
- Table: <table name>
- Columns: <column definitions with types and constraints>
- Relationships: <foreign keys if any>
- Constraints: <business rules expressed as DB constraints>

### API design
- <METHOD> <route>
- Request: <shape>
- Response: <shape>
- Status: <HTTP status codes>
- Errors: <error cases>
```

## Review file

Create only after a meaningful completed requirement.

```md
# Review — REQ-001

## What went well
- <durable feedback>

## Improve next time
- <one or a few important points>

## Concepts practiced
- <concept>: <resulting knowledge state>
```
