# Agent guidance

## Project

Remont bez nerwów is a renovation company website built with Astro, Tailwind CSS, and DaisyUI. The
project is currently at the starter stage.

## Setup and commands

- Use the Node.js version in `.nvmrc` and the npm version in `package.json`.
- Install dependencies with `npm ci`. Keep `package-lock.json` in sync when changing dependencies.
- Start development with `npm run dev -- --background`.
- Manage the server with `npm run astro -- dev status`, `npm run astro -- dev logs`, and
  `npm run astro -- dev stop`.
- Run `npm run build` to verify the production build and `npm run preview` to inspect it.
- Run `npm run check` for formatting, ESLint, and Astro type checks. Run `npm run format` or
  `npm run lint:fix` to apply fixes.
- Husky checks staged files with lint-staged and commit messages with commitlint.
- Run `npm test` for browser smoke, responsive layout, and accessibility checks against a production
  build. Install browsers first with `npm exec playwright -- install chromium firefox webkit`.
- Add browser interaction tests with new user-facing behavior. Automated accessibility checks
  supplement manual keyboard and screen reader checks.

## Implementation

- Prefer Astro components and static HTML. Add client-side JavaScript only when the interaction
  requires it.
- Follow the strict TypeScript configuration. Avoid `any` and unexplained error suppression.
- Use semantic HTML, accessible names, keyboard interactions, and visible focus states.
- Make layouts responsive and respect reduced-motion preferences when adding animation.
- Follow existing styling conventions and reuse components when there is a clear shared purpose.
- Keep changes focused. Add dependencies only when they solve a concrete project need.
- Use English for code and technical documentation; user-facing content may be in Polish.

## Validation and delivery

- Run checks appropriate to the change. For UI work, inspect the affected page at narrow and wide
  viewport sizes and check keyboard navigation.
- Describe what changed, what was verified, and any remaining limitations.
- Use Conventional Commits for commit messages and pull request titles, including before commitlint
  is configured.
- Never commit credentials, environment files, or generated build output.

## References

Consult the relevant [Astro documentation](https://docs.astro.build) before changing routing,
components, integrations, content collections, styles, or internationalization.

## Local guidance

If `AGENTS.local.md` exists, read it before starting work. It contains local instructions and must
remain untracked; do not copy its contents into public files.
