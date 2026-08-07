# Bootstrap

Bootstrap runs only when `.myway/` does not exist or when the learner explicitly asks to start a new project.

Never ask the learner to create or maintain learning-state files manually.

## Create learning state

Create:

- `.myway/PROJECT.md`
- `.myway/CURRENT.md`
- `.myway/KNOWLEDGE.md`
- `.myway/JOURNEY.md`
- `.myway/requirements/`
- `.myway/reviews/`
- `.myway/decisions/`

Use `core/templates.md` for deterministic structure.

For the current MVP, use `backend-guided` unless the learner explicitly requests another installed framework.

## Project selection

If the learner named a project, preserve that choice.

If the learner did not name one, choose a small realistic beginner backend project automatically using `core/project-generation.md`. Do not interrupt startup just to ask which project they want.

Record:

- framework: backend-guided
- language: Python
- runtime: FastAPI
- project name and one-paragraph product goal
- current requirement
- current step
- next learner action

## First requirement

Do not generate or reveal the full project roadmap.

Create only REQ-001 and enough context to make it meaningful. For a learner with no Python history, REQ-001 should normally establish the minimum runnable environment and first observable FastAPI behavior before introducing project architecture.

Use the learner's knowledge state to decide how much setup explanation is required. Explain unfamiliar shell/Python concepts rather than assuming they know virtual environments, package installation, modules, or the development server.

## Start teaching immediately

After state creation:

1. Briefly introduce the selected product and the current requirement.
2. State the first tiny learning goal.
3. Explain why it matters.
4. Teach the minimum prerequisite concept.
5. Give exactly one concrete learner action.
6. Stop and wait for the learner to perform it.

Do not scaffold the entire backend application during bootstrap. The first run should feel like the first lesson, not a generated finished project.
