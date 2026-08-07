# Framework Contract

MyWay core should remain stable. New learning domains should normally be added as frameworks rather than by changing core behavior.

## Core stability rule

Do not modify `.agents/skills/myway/core/` unless the new feature requires behavior that is genuinely shared across multiple frameworks.

Examples of valid core changes:

- fixing bootstrap or recovery bugs
- improving checkpoint persistence rules
- improving framework selection/loading
- improving shared review or command behavior

Examples that should stay inside a framework:

- Python/FastAPI curriculum
- database-design exercises
- Kubernetes-specific concepts
- React-specific review criteria

## Mode separation

Guided and Independent modes are different teaching policies and should be modeled separately.

- Guided: teach new concepts, show small code examples when useful, guide step by step, then gradually reduce assistance.
- Independent: provide business requirements and constraints, avoid proactive implementation help, challenge design decisions, and review afterward.

If a requested learning domain could reasonably support both modes and the user did not specify one, clarify the mode before adding a new framework.

## Framework naming

Use lowercase kebab-case:

- `backend-guided`
- `backend-independent`
- `database-design-guided`
- `database-design-independent`
- `system-design-guided`

Technology variants may be added only when the learning behavior materially differs, for example `backend-guided-go`.

## Framework responsibilities

Each framework must define:

1. Purpose — what capability the learner is building.
2. Target learner — prerequisite assumptions.
3. Teaching policy — how assistance should behave.
4. Project/exercise generation — what kinds of projects or scenarios are appropriate.
5. Learning progression — capability map, not a rigid day-by-day syllabus.
6. Requirement generation rules — how new requirements evolve the project.
7. Step sizing — how much work to give at once.
8. Review rubric — what good work means in that domain.
9. Completion criteria — when a project or learning cycle is considered complete.
10. Knowledge adaptation — how assistance should decrease or increase based on observed performance.

## Recommended file structure

For small frameworks, a single file under `frameworks/` is acceptable:

```text
frameworks/
└── backend-guided.md
```

When a framework grows, promote it to a folder without changing its conceptual contract:

```text
frameworks/
└── database-design-guided/
    ├── README.md
    ├── SKILL.md
    ├── curriculum.md
    ├── requirements.md
    ├── review.md
    └── rubric.md
```

Do not create extra files without a clear responsibility.

## Adding a framework

When an AI is asked to add a new framework:

1. Read this contract.
2. Inspect the current core and existing frameworks.
3. Reuse core behavior instead of duplicating it.
4. Add only domain-specific behavior.
5. Update CLI choices only if the framework is ready for real use.
6. Update README status and usage examples.
7. Add or update tests when installer or CLI behavior changes.
8. Do not mark a framework available until its end-to-end learning flow is usable.

## Product rule

Do not add many frameworks merely because they are interesting. New frameworks should follow real learning demand and should be battle-tested through actual use before expanding further.

The learner should spend cognitive effort on engineering decisions, not on remembering what to learn next.
