import assert from 'node:assert/strict';
import { mkdtemp, readdir, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { getDestinationSkillPath, installMyWay } from '../src/install.js';

test('installs the MyWay skill into an empty project', async () => {
  const targetDir = await mkdtemp(path.join(os.tmpdir(), 'my-way-'));

  try {
    const result = await installMyWay({ targetDir });

    assert.equal(result.installed, true);

    const skill = await readFile(
      path.join(getDestinationSkillPath(targetDir), 'SKILL.md'),
      'utf8',
    );

    assert.match(skill, /name: myway/);
  } finally {
    await rm(targetDir, { recursive: true, force: true });
  }
});

test('does not overwrite an existing skill unless force is enabled', async () => {
  const targetDir = await mkdtemp(path.join(os.tmpdir(), 'my-way-'));

  try {
    await installMyWay({ targetDir });

    const secondInstall = await installMyWay({ targetDir });
    assert.equal(secondInstall.installed, false);
    assert.equal(secondInstall.reason, 'exists');

    const forcedInstall = await installMyWay({ targetDir, force: true });
    assert.equal(forcedInstall.installed, true);
  } finally {
    await rm(targetDir, { recursive: true, force: true });
  }
});

test('installed skill contains complete file structure', async () => {
  const targetDir = await mkdtemp(path.join(os.tmpdir(), 'my-way-'));

  try {
    await installMyWay({ targetDir });

    const dest = getDestinationSkillPath(targetDir);

    // SKILL.md exists
    const skill = await readFile(path.join(dest, 'SKILL.md'), 'utf8');
    assert.match(skill, /name: myway/);

    // core/ has expected files
    const coreFiles = await readdir(path.join(dest, 'core'));
    assert.ok(coreFiles.includes('bootstrap.md'));
    assert.ok(coreFiles.includes('workflow.md'));
    assert.ok(coreFiles.includes('state.md'));
    assert.ok(coreFiles.includes('templates.md'));

    // frameworks/ has at least backend-guided
    const frameworkFiles = await readdir(path.join(dest, 'frameworks'));
    assert.ok(frameworkFiles.includes('backend-guided.md'));
  } finally {
    await rm(targetDir, { recursive: true, force: true });
  }
});

