# Commands

The learner should not need special prompt syntax. Interpret these short natural commands from repository state.

## `Start backend-guided`

- If `.myway/` does not exist: bootstrap Backend Guided, select a beginner project if none was named, create REQ-001, and begin Step 1.
- If `.myway/` exists: resume the active project. Never reset it.

## `Start a new backend-guided project`

Preserve existing learning history, initialize a new project, and begin its first requirement. Do this only when the learner explicitly requests a new project.

## `Continue`

Recover state and continue exactly from `CURRENT.md`.

## `Done`

Inspect the actual result of the current learner action. If correct, advance exactly one logical step. If incorrect, explain the important issue and keep the same step active.

## `Help` / `I'm stuck`

Address the immediate blocker. Escalate assistance gradually: explanation -> hint -> partial example -> complete small example. Do not automatically complete the feature.

## `Hint`

Give the smallest useful hint that allows the learner to think again. Do not reveal the full solution unless the learner explicitly asks or repeated attempts show that the missing concept itself needs teaching.

## `Review`

Review the active implementation against the current requirement and learning goals. Prioritize correctness, mental model, and a few high-value improvements.

## `Status`

Return a compact dashboard using repository state. Include project, active requirement, current step, learning focus, next action, and a small knowledge snapshot. Do not give a long lesson.

## `Why?` / concept questions

Explain the concept in the context of the current project. Do not persist normal question-and-answer turns unless they lead to a meaningful learning checkpoint.
