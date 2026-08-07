import assert from 'node:assert/strict';
import test from 'node:test';

import { smartSelect } from '../src/prompt.js';

test('auto-selects the only enabled choice', async () => {
  const result = await smartSelect({
    message: 'Agent:',
    choices: [
      { name: 'Antigravity', value: 'antigravity' },
    ],
  });

  assert.equal(result, 'antigravity');
});

test('auto-selects when other choices are disabled', async () => {
  const result = await smartSelect({
    message: 'Domain:',
    choices: [
      { name: 'Backend', value: 'backend' },
      { name: 'Database Design', value: 'database-design', disabled: true },
      { name: 'Frontend', value: 'frontend', disabled: true },
    ],
  });

  assert.equal(result, 'backend');
});
