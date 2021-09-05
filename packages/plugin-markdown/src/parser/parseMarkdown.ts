import { prettyJsonStr } from '@vitebook/core/utils/json.js';
import matter from 'gray-matter';
import LRUCache from 'lru-cache';
import toml from 'toml';

import type {
  MarkdownParser,
  MarkdownParserEnv,
  ParsedMarkdownResult
} from './types.js';
import { preventViteConstantsReplacement } from './utils.js';

const cache = new LRUCache<string, ParsedMarkdownResult>({ max: 1024 });

export function parseMarkdown(
  parser: MarkdownParser,
  source: string,
  filePath: string,
  options: {
    escapeConstants?: boolean;
    define?: Record<string, unknown>;
  } = {}
): ParsedMarkdownResult {
  const cachedResult = cache.get(source);
  if (cachedResult) return cachedResult;

  const {
    data: frontmatter,
    content,
    excerpt
  } = matter(source, {
    excerpt_separator: '<!-- more -->',
    engines: {
      toml: toml.parse.bind(toml)
    }
  });

  const parserEnv: MarkdownParserEnv = {
    filePath,
    frontmatter
  };

  let html = parser.render(content, parserEnv);
  const excerptHtml = parser.render(excerpt);

  if (options.escapeConstants) {
    html = preventViteConstantsReplacement(html, options.define);
  }

  const {
    headers = [],
    importedFiles = [],
    links = [],
    title = ''
  } = parserEnv;

  const result: ParsedMarkdownResult = {
    content,
    html,
    links,
    importedFiles,
    data: {
      excerpt: excerptHtml,
      frontmatter,
      headers,
      lang: '',
      title
    }
  };

  cache.set(source, result);
  return result;
}

export function loadParsedMarkdown(result: ParsedMarkdownResult): string {
  return prettyJsonStr({
    template: result.html,
    data: result.data
  });
}
