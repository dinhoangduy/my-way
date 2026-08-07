# Bootstrap

When `.myway/` does not exist, initialize it automatically. Do not ask the learner to create or maintain these files.

Create:

- `.myway/PROJECT.md`
- `.myway/CURRENT.md`
- `.myway/KNOWLEDGE.md`
- `.myway/JOURNEY.md`
- `.myway/requirements/`
- `.myway/reviews/`
- `.myway/decisions/`

For the current MVP, use the `backend-guided` framework unless the learner explicitly requests another installed framework.

If the learner already named a project (for example Todo API), preserve that project choice. Otherwise choose a small realistic backend project appropriate for a beginner.

Do not generate the full product backlog. Generate only the current requirement and enough project context to make that requirement meaningful.

Initial state must record:

- framework: backend-guided
- language: Python
- runtime: FastAPI
- project name
- current requirement
- current step
- next learner action

After initialization, immediately begin the first guided step.
