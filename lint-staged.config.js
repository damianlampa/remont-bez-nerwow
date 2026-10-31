export default {
  '*.{js,mjs,cjs,ts,tsx,astro}': ['eslint --fix --max-warnings=0', 'prettier --write'],
  '*.{json,jsonc,md,mdx,css,html,yml,yaml,svg}': 'prettier --write',
};
