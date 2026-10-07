import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jichangdao.com',
  output: 'static',
  trailingSlash: 'never',
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});
