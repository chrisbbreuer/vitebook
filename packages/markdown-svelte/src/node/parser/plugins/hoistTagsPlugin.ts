import type { PluginWithOptions } from 'markdown-it';

import type { SvelteMarkdownParserEnv } from '../types';

export type HoistTagsPluginOptions = {
  /** Custom blocks to be hoisted. */
  customBlocks?: string[];
};

/**
 * Avoid rendering Svelte script/style blocks. Extract them into `env`, and hoist them root level.
 */
export const hoistTagsPlugin: PluginWithOptions<HoistTagsPluginOptions> = (
  md,
  { customBlocks = [] }: HoistTagsPluginOptions = {}
): void => {
  // Hoist `<script>`, `<style>` and other user defined tags.
  const hoistTags = Array.from(new Set(['script', 'style', ...customBlocks]));
  const hoistTagsRegexp = new RegExp(
    `^<(${hoistTags.join('|')})(?=(\\s|>|$))`,
    'i'
  );

  const rawRule = md.renderer.rules.html_block!;

  md.renderer.rules.html_block = (
    tokens,
    idx,
    options,
    env: SvelteMarkdownParserEnv,
    self
  ) => {
    const content = tokens[idx].content;
    const hoistedTags = env.hoistedTags || (env.hoistedTags = []);

    // Push hoisted tags to `env` and do not render them.
    if (hoistTagsRegexp.test(content.trim())) {
      hoistedTags.push(content);
      return '';
    }

    return rawRule(tokens, idx, options, env, self);
  };
};
