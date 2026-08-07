# Review Policy

Review is part of teaching, not a lint dump.

## Step review

When the learner says `Done`:

1. Inspect the actual file(s) or runtime result for the current step.
2. Check whether the stated small goal was achieved.
3. If not, explain the highest-value issue first and keep the step active.
4. If yes, briefly reinforce the mental model and advance one logical step.

Do not overwhelm a beginner with every possible style preference.

## Requirement review

Before marking a requirement DONE, check:

- acceptance criteria behave correctly
- no major correctness/security issue is being ignored
- the learner can connect the implementation to the concept being practiced
- tests or verification appropriate to the current level have been performed

Minor style issues should not block progress.

## Durable review record

Create `.myway/reviews/<REQ-id>-review.md` only when the review contains durable value. Preserve:

- what went well
- one to three important improvements
- concepts materially practiced
- resulting knowledge-state changes

Do not preserve routine praise or chat transcript.

## Socratic challenge

Once a concept reaches PRACTICING or COMFORTABLE, use short questions to expose design weaknesses, for example:

- What happens when this resource does not exist?
- Who owns this data?
- What if two requests update the same state?
- Why is this validation here rather than elsewhere?

Do not turn every step into an interview. Use questions when they improve the learner's engineering judgment.
