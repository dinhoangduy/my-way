# Learning State

`.myway/` is AI-owned persistent learning state. The learner must never be asked to edit it manually.

## Files

### PROJECT.md
Stable project context: project goal, selected framework, stack, broad milestones, and completed requirements.

### CURRENT.md
Small mutable resume point. Keep it short. It must contain:

- current requirement id and title
- status: NEW | LEARNING | IMPLEMENTING | REVIEW | DONE
- current step
- what the learner is expected to do next
- relevant source files, if any
- unresolved blocker, if any

### KNOWLEDGE.md
Track concepts by exposure, not fake precision. Recommended states:

- NEW: never taught
- INTRODUCED: taught once, still needs code/examples
- PRACTICING: learner has used it and should receive hints before code
- COMFORTABLE: learner should implement it independently

### JOURNEY.md
Append concise milestone summaries only. Do not log individual questions or chat turns.

### requirements/
One Markdown file per meaningful requirement.

### reviews/
One concise review per completed requirement when there is useful feedback to preserve.

### decisions/
Store only decisions whose rationale would not be obvious from source code.

## Source of truth

Application source code is the source of truth for implementation facts. Do not duplicate facts that can be reconstructed by reading the code.

When `.myway/` disagrees with the repository, inspect the code and repair `.myway/` before continuing.
