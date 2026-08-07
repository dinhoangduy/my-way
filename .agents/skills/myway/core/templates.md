# State Templates

Use these shapes when bootstrapping `.myway/`. Keep them concise and adapt values to the actual project.

## PROJECT.md

```md
# Project

Name: <project name>
Framework: backend-guided
Language: Python
Runtime: FastAPI
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

## Python
- functions: NEW
- type annotations: NEW
- classes: NEW
- async-await: NEW

## FastAPI
- app-and-server: NEW
- routes: NEW
- request-validation: NEW
- dependency-injection: NEW

## Database
- relational-model: NEW
- sqlalchemy: NEW
- migrations: NEW
- transactions: NEW

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

## Requirement file

Path: `.myway/requirements/REQ-001-<slug>.md`

```md
# REQ-001 — <title>

Status: NEW

## Business need
<why the product needs this>

## Acceptance criteria
- <observable behavior>
- <observable behavior>

## Learning focus
<concepts relevant to this requirement; omit spoilers>
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
