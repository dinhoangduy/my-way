# Checkpoints

Do not write persistent state after every message. Treat normal questions, debugging, explanations, and intermediate attempts as working memory.

Persist state only at meaningful checkpoints such as:

- requirement created
- meaningful lesson completed
- implementation step materially advanced
- requirement review completed
- requirement marked DONE
- architecture decision worth preserving
- project milestone completed

At a checkpoint:

1. Update `CURRENT.md`.
2. Update `KNOWLEDGE.md` only for concepts materially practiced.
3. Append a concise entry to `JOURNEY.md` only when the milestone is worth remembering.
4. Add a review or decision file only when it contains durable value.

Never turn `.myway/` into chat history.
