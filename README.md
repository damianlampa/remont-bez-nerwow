# Remont bez nerwów

A website for a renovation company. Currently at the initial setup stage, using Astro, Tailwind CSS,
and DaisyUI.

## Development

Use Node.js 26.13.0 (LTS) and npm 11.20.0. With nvm installed, run `nvm use`.

```sh
npm ci
npm run dev -- --background
```

Manage the server with `npm run astro -- dev status`, `npm run astro -- dev logs`, and
`npm run astro -- dev stop`.

## Production build

```sh
npm run build
npm run preview
```

Set `SITE_URL` to the production URL when deploying to enable sitemap generation.

## Code quality

Run `npm run check` for formatting, ESLint, and type checks. Use `npm run format` and
`npm run lint:fix` to apply fixes. Husky checks staged files and validates Conventional Commit
messages. Hooks are installed by `npm ci`.

The `minimatch` override pins a patched release for GHSA-g3hv-75wg-m249 while ESLint dependencies
request version 10. Remove it once upstream ranges include the fix.

## Contributions

Use a focused branch and a pull request with a Conventional Commits title. CI checks formatting,
ESLint, types, the production build, dependencies, and the PR title. Merge using squash. See
[repository settings](.github/repository/README.md) for the configuration and maintenance commands.

## License

[MIT](LICENSE).
