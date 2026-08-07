import { select } from '@inquirer/prompts';

/**
 * If only one enabled choice exists, auto-select it and log the result.
 * Otherwise show an interactive prompt.
 */
export async function smartSelect({ message, choices }) {
  const enabled = choices.filter((c) => !c.disabled);

  if (enabled.length === 1) {
    console.log(`  ${message} ${enabled[0].name}`);
    return enabled[0].value;
  }

  return select({ message, choices });
}
