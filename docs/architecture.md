# Architecture

MyWay is intentionally small. The first version is a filesystem-driven learning protocol for AI coding agents.

## Runtime model

```text
Project
  |
  +-- .agents/skills/myway/     AI instructions
  |
  +-- .myway/                   AI-owned learning state
  |
  +-- application source code  learner-owned implementation
```

## Skill structure

```text
.agents/skills/myway/
├── SKILL.md
├── core/
│   ├── bootstrap.md
│   ├── workflow.md
│   ├── state.md
│   └── checkpoints.md
└── frameworks/
    └── backend-guided.md
```

`SKILL.md` is the entry point. Core files define reusable behavior. Framework files define domain-specific teaching behavior.

## Project state

The AI creates `.myway/` when it does not exist.

```text
.myway/
├── PROJECT.md
├── CURRENT.md
├── KNOWLEDGE.md
├── JOURNEY.md
├── requirements/
├── lessons/
├── reviews/
└── decisions/
```

The application source code remains the implementation source of truth. `.myway/` stores learning context and rationale, not duplicated code facts.

## MVP scope

The first battle-tested framework is `backend-guided`, targeting a beginner learning Python and FastAPI through complete projects.

Independent mode and additional domains should be added only after Guided Mode proves useful in real learning sessions.
