import type { ViteDevServer } from 'vite';

import { resolveApp } from '../../app/resolveApp';
import type { DevCommandArgs } from '../args';

export async function devCommand(args: DevCommandArgs): Promise<ViteDevServer> {
  const app = await resolveApp(args);
  const server = await app.dev();
  return server.listen();
}
