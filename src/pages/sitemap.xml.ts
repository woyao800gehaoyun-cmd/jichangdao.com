import { getCollection } from 'astro:content';
import { brands } from '@/data/brands';
import { site } from '@/data/site';

export async function GET() {
  const staticPaths=['','reviews','guides','compare','brands','topics','about','contact','privacy'];
  const groups=await Promise.all(['reviews','guides','compare'].map(async collection=>(await getCollection(collection as 'reviews'|'guides'|'compare')).map(entry=>`${collection}/${entry.id}`)));
  const paths=[...staticPaths,...groups.flat(),...brands.map(b=>`brands/${b.slug}`)];
  const xml=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path=>`<url><loc>${site.url}/${path}</loc></url>`).join('')}</urlset>`;
  return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
