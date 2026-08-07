# Feature Analysis — Socratic Discovery

Before implementing any feature requirement (REQ-002 onwards), guide the learner to discover the design through structured questions. Do not present a pre-made analysis.

## Core principle

The learner should feel that they designed the feature, not that they copied the AI's design. The AI asks, the learner discovers, the AI enriches.

## Discovery protocol

### 1. Frame the scenario

Present the requirement as a concrete, relatable story — not a generic feature name.

- Bad: "Implement book borrowing"
- Good: "A student wants to borrow 'Clean Code' from the university library. The system needs to record who borrowed what, when, and when it's due back."

The scenario should make the learner visualize a real person doing a real action.

### 2. Ask discovery questions

Ask questions in small batches (2–3 per turn). Wait for the learner to respond before asking the next batch. Organize questions into four groups:

**Business understanding** — what happens in the real world?
- "When you borrow a book, what actually happens step by step?"
- "What information needs to be recorded?"
- "Who is involved in this process?"

**Data discovery** — what needs to be stored?
- "What data describes a borrowing? Who borrowed what, when?"
- "How does a borrowing relate to a book? To a user?"
- "What rules exist? Can someone borrow unlimited books?"

**Edge cases and constraints** — what can go wrong?
- "What if the book is already borrowed by someone else?"
- "What happens when the due date passes?"
- "Can someone extend their borrowing period?"

**API shape** — how does the client interact?
- "What information does the app need to send to create a borrowing?"
- "What should the server respond with?"
- "What should happen if the request is invalid?"

### 3. Learner responds

Accept imperfect answers. The learner does not need to use technical terms. If they say "save who took the book and when," that is a valid starting point for a data design.

Do not reject answers that are directionally correct but incomplete.

### 4. AI enriches

After the learner responds, the AI:

- Confirms what the learner got right (briefly, not excessively)
- Adds what was missing, explaining why it matters
- Introduces technical terms naturally: "What you described is called a foreign key — it connects the borrowing to the specific book"
- Teaches NEW concepts at this moment, not later during implementation

### 5. Co-create the design

Together, produce:

- **Data design**: tables, columns, types, constraints, relationships
- **API design**: methods, routes, request/response shapes, status codes, error cases

Write this into the requirement file as the "Discovery summary" section. This is the learner's design, enriched by the AI.

### 6. Break into implementation steps

Once the design is agreed upon, break it into small ordered steps:
- model → migration → schema → endpoint → test

These steps should feel like translating an already-understood design into code.

## Adaptive questioning

Adjust question depth based on the learner's knowledge state:

### Data design concepts are NEW

Ask simple, concrete questions. When the learner cannot answer, teach the concept at that moment.

Example: learner does not know what a primary key is → explain it when the data discovery question naturally leads there, not as a separate lesson.

### Data design concepts are PRACTICING

Ask the questions, then only supplement what the learner missed. Let them struggle briefly before helping.

### Data design concepts are COMFORTABLE

Present only the scenario. Let the learner produce the full analysis independently. Review their design afterward using the Socratic challenge approach from `core/review.md`.

## Question quality rules

- Questions must be short and natural, not academic
- Do not ask more than 3 questions at once
- Questions should connect logically — each answer leads to the next question
- Avoid yes/no questions; prefer open questions that require thinking
- Frame questions around the scenario, not around database theory

## Data-first principle

Always start discovery from data (what needs to be stored?) before API (how does the client interact?). This mirrors how experienced engineers think: understand the domain → model the data → expose it through an API.

## Revisiting analysis

When a later requirement changes earlier data design (adding a column, a relationship, or a constraint), briefly revisit the original discovery conversation to show the learner how real projects evolve. Ask: "Remember when we designed the borrowings table? What needs to change now?"
