import { readFile } from 'node:fs/promises';

const host = 'jichangdao.com';
const key = 'f5e6a2d7c3b84a91e0f62c7d1b49a835';
const keyLocation = `https://${host}/${key}.txt`;
const endpoint = 'https://api.indexnow.org/indexnow';

const decodeXml = (value) => value
  .replaceAll('&amp;', '&')
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>')
  .replaceAll('&quot;', '"')
  .replaceAll('&apos;', "'");

async function getSitemap() {
  try {
    return await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
  } catch {
    const response = await fetch(`https://${host}/sitemap.xml`, {
      headers: { 'user-agent': 'jichangdao-indexnow/1.0' }
    });
    if (!response.ok) throw new Error(`无法读取线上 sitemap：HTTP ${response.status}`);
    return response.text();
  }
}

const sitemap = await getSitemap();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/gsi)]
  .map((match) => decodeXml(match[1].trim()))
  .filter((url) => {
    try { return new URL(url).hostname === host; }
    catch { return false; }
  });

if (!urlList.length) throw new Error('sitemap 中没有找到可提交的 URL。');
if (urlList.length > 10_000) throw new Error('IndexNow 单次最多提交 10,000 个 URL。');

if (process.env.INDEXNOW_DRY_RUN === '1') {
  console.log(`IndexNow 预检通过：${urlList.length} 个 URL，密钥位置 ${keyLocation}`);
  process.exit(0);
}

const response = await fetch(endpoint, {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation, urlList })
});

if (!response.ok && response.status !== 202) {
  const body = await response.text();
  throw new Error(`IndexNow 提交失败：HTTP ${response.status}${body ? ` - ${body}` : ''}`);
}

console.log(`IndexNow 提交成功：HTTP ${response.status}，共 ${urlList.length} 个 URL。`);
