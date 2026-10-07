import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jichangdao.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    // Keep every page visually complete even when HTML is opened directly or
    // hosted under a GitHub Pages project path where asset roots can differ.
    inlineStylesheets: 'always'
  },
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});
