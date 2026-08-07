#!/usr/bin/env node

import { confirm } from '@inquirer/prompts';
import process from 'node:process';
import { installMyWay } from '../src/install.js';
import { smartSelect } from '../src/prompt.js';

function hasFlag(flag) {
  return process.argv.slice(2).includes(flag);
}

async function main() {
  const forceFromArgs = hasFlag('--force');

  console.log('\nMyWay — learn by building real projects\n');

  await smartSelect({
    message: 'Agent:',
    choices: [
      { name: 'Antigravity', value: 'antigravity' },
    ],
  });

  await smartSelect({
    message: 'Domain:',
    choices: [
      { name: 'Backend', value: 'backend' },
      { name: 'Advanced Database (coming soon)', value: 'advanced-database', disabled: true },
    ],
  });

  await smartSelect({
    message: 'Mode:',
    choices: [
      { name: 'Guided', value: 'guided' },
      { name: 'Independent (coming soon)', value: 'independent', disabled: true },
    ],
  });

  console.log();

  let result = await installMyWay({ force: forceFromArgs });

  if (!result.installed && result.reason === 'exists' && !forceFromArgs) {
    const shouldOverwrite = await confirm({
      message: '.agents/skills/myway already exists. Replace it?',
      default: false,
    });

    if (!shouldOverwrite) {
      console.log('\nNo changes made.\n');
      return;
    }

    result = await installMyWay({ force: true });
  }

  console.log(`\n✓ MyWay installed at ${result.destination}`);
  console.log('\nNext:');
  console.log('1. Open this project in Antigravity.');
  console.log('2. Say: Start backend-guided.');
  console.log('3. MyWay will choose a beginner project and begin the first lesson.\n');
}

main().catch((error) => {
  if (error?.name === 'ExitPromptError') {
    console.log('\nCancelled.\n');
    process.exit(0);
  }

  console.error(`\nMyWay failed: ${error.message}\n`);
  process.exit(1);
});
