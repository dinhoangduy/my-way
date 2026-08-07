# Workflow

> Human-readable design document. The AI agent reads `.agents/skills/myway/core/` and `frameworks/` directly.

MyWay uses a requirement-centered learning loop.

1. Start one requirement.
2. Understand the problem.
3. Learn only the concepts needed now.
4. Implement one small step.
5. Review, debug, and ask questions.
6. Repeat until the requirement is complete.
7. Write one learning checkpoint.

## Working memory

Questions, debugging attempts, and intermediate explanations stay in the active session. Do not write them to `.myway/` one by one.

## Persistent memory

Update persistent learning state only at meaningful checkpoints.

## Guided interaction

When a concept is new, the AI may provide a small code example and explain it. Then stop and let the learner perform the step.

The AI must not turn a guided requirement into a large autonomous implementation.

## Resuming

At the beginning of a new session, reconstruct context from `.myway/`, relevant requirement/review/decision files, and relevant application source code. Continue from the recorded next action.
