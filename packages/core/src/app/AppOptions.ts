import type { UserConfig as ViteConfig } from 'vite';

import { CLIArgs } from '../cli/args.js';
import type {
  DefaultThemeConfig,
  SiteConfig,
  ThemeConfig
} from '../shared/index.js';
import type { Plugins } from './plugin/Plugin.js';

export type AppOptions<Theme extends ThemeConfig = DefaultThemeConfig> = {
  /**
   * Parsed CLI arguments.
   */
  cliArgs: CLIArgs;

  /**
   * Path to project root directory. The path can be absolute or relative to the current working
   * directory `process.cwd()`.
   *
   * @default process.cwd()
   */
  root: string;

  /**
   * Path to source code directory. The value can be either an absolute file system path
   * or a path relative to `<root>`.
   *
   * @default '<root>/src'
   */
  srcDir: string;

  /**
   * The Vitebook config directory. The value can be either an absolute file system path
   * or a path relative to `<root>`.
   *
   * @default '<root>/.vitebook'
   */
  configDir: string;

  /**
   * Directory to serve as plain static assets. Files in this directory are served and copied to
   * build dist dir as-is without transform. The value can be either an absolute file system path
   * or a path relative to `<configDir>`.
   *
   * @default '<configDir>/public'
   */
  publicDir: string;

  /**
   * The build output directory. The value can be either an absolute file system path or a path
   * relative to `<configDir>`.
   *
   * @default '<configDir>/dist'
   */
  outDir: string;

  /**
   * Globs pointing to files to be included in Vitebook (relative to `<root>`).
   *
   * @default []
   */
  include: string[];

  /**
   * Site-wide options for setting the base language, document title, description, locales, etc.
   */
  site: SiteConfig<Theme>;

  /**
   * Options to pass on to `vite`.
   */
  vite: ViteConfig;

  /**
   * General plugins to use and their respective configurations.
   */
  plugins: Plugins;

  /**
   * Whether to load in debug mode.
   *
   * @default false
   */
  debug: boolean;

  /**
   * Cache directory. The value can be either an absolute file system path or a path
   * relative to `<configDir>`.
   *
   * @default '<configDir>/.cache'
   */
  cacheDir: string;

  /**
   * Temp directory. The value can be either an absolute file system path or a path
   * relative to `<configDir>`.
   *
   * @default '<configDir>/.temp'
   */
  tmpDir: string;
};

export type AppConfig<Theme extends ThemeConfig = DefaultThemeConfig> = Partial<
  AppOptions<Theme>
>;
