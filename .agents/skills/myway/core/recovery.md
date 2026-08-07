# Recovery

Recovery exists so the learner can return after hours, days, or weeks without reconstructing context manually.

When `.myway/` exists:

1. Read `PROJECT.md`, `CURRENT.md`, and `KNOWLEDGE.md`.
2. Read the active requirement file named by `CURRENT.md`.
3. Inspect only the application files relevant to the current step.
4. Reconcile state with source code.
5. If the code is ahead of state, repair `.myway/` before teaching.
6. If the state is ahead of code, roll the state back to the last verifiable point.
7. Give a short resume containing only:
   - current project
   - active requirement
   - current learning focus
   - next learner action
8. Continue from the current step.

Do not replay previous lessons unless the learner asks or their code indicates the prerequisite was not actually understood.

## Existing project protection

If the learner says `Start backend-guided` and `.myway/` already exists, resume the current project. Never reset, archive, or replace the active learning state implicitly.

Only begin a separate project when the learner explicitly asks for a new project, for example `Start a new backend-guided project`.

Before starting a new project, preserve the old `.myway/` state under `.myway/archive/<project-slug>/` when filesystem operations allow it. Never discard learning history silently.
