import { getCollection } from 'astro:content';
import { site } from '@/data/site';

export async function GET() {
  const groups = await Promise.all(['reviews','guides','compare'].map(async collection =>
    (await getCollection(collection as 'reviews'|'guides'|'compare')).map(entry => ({ entry, collection }))
  ));
  const items = groups.flat().sort((a,b)=>b.entry.data.publishedDate.valueOf()-a.entry.data.publishedDate.valueOf());
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${site.name}</title><link>${site.url}</link><description>${site.description}</description><language>zh-CN</language>${items.map(({entry,collection})=>`<item><title><![CDATA[${entry.data.title}]]></title><description><![CDATA[${entry.data.description}]]></description><link>${site.url}/${collection}/${entry.id}</link><guid>${site.url}/${collection}/${entry.id}</guid><pubDate>${entry.data.publishedDate.toUTCString()}</pubDate></item>`).join('')}</channel></rss>`;
  return new Response(xml,{headers:{'Content-Type':'application/rss+xml; charset=utf-8'}});
}
