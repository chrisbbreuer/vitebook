import { path, fs } from '@vitebook/core/node/utils';
import { fileURLToPath } from 'url';

// @ts-expect-error
const currentDir = path.dirname(fileURLToPath(import.meta.url));
const iconsDir = path.resolve(currentDir, '../src/node/icons');

const dest = path.resolve(currentDir, '../dist/icons');

async function main() {
  await fs.ensureDir(dest);
  await fs.copy(iconsDir, dest);
}

main();
