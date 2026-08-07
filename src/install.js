import { access, cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, '..');

export const SUPPORTED_AGENT = 'antigravity';
export const SUPPORTED_DOMAIN = 'backend';
export const SUPPORTED_MODE = 'guided';

export function getBundledSkillPath() {
  return path.join(packageRoot, '.agents', 'skills', 'myway');
}

export function getDestinationSkillPath(targetDir = process.cwd()) {
  return path.join(targetDir, '.agents', 'skills', 'myway');
}

export async function pathExists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

export async function installMyWay({ targetDir = process.cwd(), force = false } = {}) {
  const source = getBundledSkillPath();
  const destination = getDestinationSkillPath(targetDir);

  if (!(await pathExists(source))) {
    throw new Error(`Bundled MyWay skill not found at ${source}`);
  }

  const alreadyExists = await pathExists(destination);

  if (alreadyExists && !force) {
    return {
      installed: false,
      reason: 'exists',
      destination,
    };
  }

  if (alreadyExists && force) {
    await rm(destination, { recursive: true, force: true });
  }

  await mkdir(path.dirname(destination), { recursive: true });
  await cp(source, destination, { recursive: true });

  return {
    installed: true,
    destination,
  };
}
