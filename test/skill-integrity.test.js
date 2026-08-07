import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const skillRoot = path.resolve(__dirname, '..', '.agents', 'skills', 'myway');

test('SKILL.md exists and contains required frontmatter', async () => {
  const content = await readFile(path.join(skillRoot, 'SKILL.md'), 'utf8');

  assert.match(content, /^---/);
  assert.match(content, /name: myway/);
  assert.match(content, /description:/);
});

test('all core files referenced by the skill exist', async () => {
  const expectedCoreFiles = [
    'bootstrap.md',
    'checkpoints.md',
    'commands.md',
    'feature-analysis.md',
    'project-generation.md',
    'recovery.md',
    'review.md',
    'state.md',
    'templates.md',
    'workflow.md',
  ];

  const coreDir = path.join(skillRoot, 'core');
  const actual = await readdir(coreDir);

  for (const file of expectedCoreFiles) {
    assert.ok(actual.includes(file), `Missing core file: ${file}`);
  }
});

test('at least one framework file exists', async () => {
  const frameworksDir = path.join(skillRoot, 'frameworks');
  const files = await readdir(frameworksDir);
  const mdFiles = files.filter((f) => f.endsWith('.md'));

  assert.ok(mdFiles.length > 0, 'No framework files found');
  assert.ok(mdFiles.includes('backend-guided.md'), 'Missing backend-guided.md');
});

test('no orphan files in core/ that are not .md', async () => {
  const coreDir = path.join(skillRoot, 'core');
  const files = await readdir(coreDir);
  const nonMd = files.filter((f) => !f.endsWith('.md'));

  assert.deepEqual(nonMd, [], `Unexpected non-markdown files in core/: ${nonMd.join(', ')}`);
});

test('PROJECT.md template includes protocol version', async () => {
  const content = await readFile(path.join(skillRoot, 'core', 'templates.md'), 'utf8');

  assert.match(content, /Protocol: 1/, 'templates.md must include Protocol version in PROJECT.md template');
});

test('feature requirement template includes scenario and discovery summary', async () => {
  const content = await readFile(path.join(skillRoot, 'core', 'templates.md'), 'utf8');

  assert.match(content, /## Scenario/, 'Requirement template must include Scenario section');
  assert.match(content, /## Discovery summary/, 'Requirement template must include Discovery summary section');
  assert.match(content, /### Data design/, 'Discovery summary must include Data design');
  assert.match(content, /### API design/, 'Discovery summary must include API design');
});

test('workflow includes ANALYZING phase', async () => {
  const content = await readFile(path.join(skillRoot, 'core', 'workflow.md'), 'utf8');

  assert.match(content, /ANALYZING/, 'Workflow must include ANALYZING phase in requirement lifecycle');
});

test('feature analysis uses Socratic discovery protocol', async () => {
  const content = await readFile(path.join(skillRoot, 'core', 'feature-analysis.md'), 'utf8');

  assert.match(content, /discovery question/i, 'Feature analysis must reference discovery questions');
  assert.match(content, /learner responds/i, 'Feature analysis must include learner response step');
  assert.match(content, /AI enriches/i, 'Feature analysis must include AI enrichment step');
  assert.match(content, /co-create/i, 'Feature analysis must include co-creation step');
});

test('project generation uses scenario-based requirements', async () => {
  const content = await readFile(path.join(skillRoot, 'core', 'project-generation.md'), 'utf8');

  assert.match(content, /[Ss]cenario/, 'Project generation must reference scenario-based requirements');
});
