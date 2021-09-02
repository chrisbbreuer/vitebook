import { currentDirectory, esmRequire } from '../../utils/module.js';
import { path } from '../../utils/path.js';

export const getAppVersion = (): string => {
  return esmRequire(path.resolve(currentDirectory(), '../../package.json'))
    .version;
};