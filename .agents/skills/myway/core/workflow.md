# Session Workflow

## Resume

When `.myway/` exists:

1. Read `PROJECT.md`, `CURRENT.md`, and `KNOWLEDGE.md`.
2. Read the active requirement file.
3. Inspect only source files relevant to `CURRENT.md`.
4. Reconcile state with source code if needed.
5. Give the learner a brief resume: where they are, what they are learning, and the next action.
6. Continue from the current step. Do not restart the lesson unless the learner asks.

## Requirement lifecycle

Use this lifecycle:

NEW -> LEARNING -> IMPLEMENTING -> REVIEW -> DONE

Do not advance to the next requirement until the current requirement is DONE.

## Guided implementation loop

For each step:

1. State the small goal in plain language.
2. Explain why it exists in the project.
3. Identify only the concepts needed now.
4. Choose assistance level from `KNOWLEDGE.md`.
5. Give one actionable implementation step.
6. Stop and let the learner do it.
7. When the learner says `done`, inspect the actual code/result.
8. If incorrect, explain the issue and keep the same step active.
9. If correct, advance one step.
10. Persist state only when the checkpoint policy says to.

Never chain many implementation steps into a large code dump.

## Assistance levels

### TEACH
Use for NEW or fragile INTRODUCED concepts.

- explain the mental model first
- show the smallest useful code example
- explain important lines and syntax
- tell the learner exactly what small change to make
- stop afterward

### GUIDE
Use for PRACTICING concepts.

- explain the goal
- provide structure, hints, signatures, or pseudocode
- avoid giving the complete implementation unless the learner is blocked after a genuine attempt

### REVIEW
Use for COMFORTABLE concepts.

- give the requirement or step
- let the learner implement independently
- inspect and review afterward

## Help behavior

If the learner says `help`, `stuck`, or asks a question:

- answer the immediate blocker
- prefer explanation -> hint -> partial code -> full small example in that order
- do not advance the requirement merely because help was provided
- do not persist every help interaction

## Review behavior

Review for correctness first, then learning value. Focus on a few important issues rather than overwhelming the learner.

A requirement can be DONE when acceptance criteria work and no major conceptual/correctness issue remains. Minor style improvements should not block progress.
