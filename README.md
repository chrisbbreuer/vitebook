# Vitebook&nbsp;&nbsp;🖼️

[![package-badge]][package]

> 🚨&nbsp;&nbsp;Vitebook is still in early stages of development, so this means you can expect bugs
> and certain [features to be missing](#missing-features). As much as we'll try not to break
> existing API's, occasionally it _might_ happen.

Vitebook is a fast and lightweight alternative to [Storybook][storybook] that's
powered by [Vite][vite]. If you'd like to explore more about Vite vs traditional bundlers/dev
environments such as [Webpack][webpack], check out [Why Vite][vite-why].

If you're unfamiliar with Storybook, it's an open source tool for building UI components and
pages in isolation. It streamlines UI development, testing, and documentation. Vitebook aims
to provide the same capabilities but in a more laxed, lighter, faster and configurable way.

### 🏆&nbsp;&nbsp;Design Goals

> You can think of Vitebook as a SSG that's a mix between something like [Vitepress][vitepress]
> and [Storybook][storybook].

The Vitebook core is simply a [static site generator][what-is-ssg] with a file-system based routing
scheme (similar-ish to [Next.js][nextjs-routing]), and a uber-fast development environment thanks
to Vite. At its core that's all it is, bunch of files that are resolved into pages which are
used to build up a site. Ultimately, Vitebooks aims to be a natural extension of Vite/Rollup
whilst offering a minimal layer on top, making it easier for you to build, document, and test
your components.

Here's some of our overall design goals:

- **Minimal.** We try not to assume anything about how you want to showcase your components. Most
  features are off by default, and we leave it to you decide what you need and when you need it.
- **Light.** Both our package installation sizes and final production builds are _tiny_ compared
  to Storybook. The base default theme starts at ~40KB minzipped, and if you decide to
  build a custom theme, the client itself comes in at ~10KB minzipped. All thanks to
  [Svelte][svelte-gh] 👏.
- **Fast.** Speed is critical for a good developer's experience (DX). Getting up and running quickly,
  instant feedback via hot module reloading (HMR) whilst preserving component state, fast TypeScript
  compilation via [ESBuild][esbuild], and fast production builds are how we focus on speed. All
  thanks to Vite/ESBuild 👏.
- **Simple.** No complex iframes or shadow roots. Simple CSS scoping is used to style Vitebook
  themes and leave your components untouched. This also means your components feel part of an
  application as they would in the real world, rather than unnaturally isolated.
- **Idiomatic.** Build, play, test, and document your components the way you would naturally use
  them. No funky `.story.{js,ts}` files and templates/args. Import and use your components in `.jsx`,
  `.tsx`, `.vue`, `.svelte` files and interact with them as you normally would.
- **Themeable.** You should control how you want to display your component library. Easily swap
  out the default theme and build your own. You'll find it baked right into the configuration
  folder (`.vitebook/theme`).
- **Extendable.** As mentioned, we aim to extend Vite/Rollup without losing any of their
  configurability or power. Vitebook plugins are an extension of Vite plugins, which are an
  extension of Rollup plugins. Thus, their ecosystem of features and plugins are all at your
  disposal.

### 🚧&nbsp;&nbsp;Missing Features

The missing features below could be dealbreakers for some. If so, feel free to keep using
[Storybook][storybook] in the meantime, and reguarly check-in (tap the watch button above) to see
how we're doing with bringing these features to you. Also, feel free to chime in on the issues
and share your thoughts!

- Addons
- Controls Addon
- API Reference Addon
- Viewport Addon
- Event Logging
- HTTP API Mocking
- Testing Guides
- Algolia Plugin
- Component Search
- Keyboard Shortcuts
- Bundle Library for Production
- Custom Themes with React/Preact/Vue

## Quickstart

Not available yet (coming soon).

## Documentation

Not available yet (coming soon to [vitebook.dev][vitebook]).

## Contributing

See [contributing.md](./.github/contributing.md).

## License

[MIT](./LICENSE)

Copyright (c) 2021-present, Rahim Alwer

[esbuild]: https://esbuild.github.io
[package]: https://www.npmjs.com/package/@vitebook/core
[package-badge]: https://img.shields.io/npm/v/@vitebook/core/next
[semantic-release]: https://github.com/semantic-release/semantic-release
[storybook]: https://storybook.js.org
[storybook-theming]: https://storybook.js.org/docs/react/configure/theming
[webpack]: https://webpack.js.org
[nextjs-routing]: https://nextjs.org/docs/routing/introduction
[vite]: https://vitejs.dev
[vite-why]: https://vitejs.dev/guide/why.html
[vitebook]: https://vitebook.dev
[svelte-gh]: https://github.com/sveltejs/svelte
[vitepress]: https://vitepress.vuejs.org
[docusaurus]: https://docusaurus.io
[what-is-ssg]: https://www.cloudflare.com/en-au/learning/performance/static-site-generator/#:~:text=A%20static%20site%20generator%20is,to%20users%20ahead%20of%20time.
