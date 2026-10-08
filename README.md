# 机场岛（jichangdao.com）

一个面向长期 SEO 内容运营的中文机场评测博客底座。基于 Astro 7 构建，默认静态输出，兼顾性能、内容可维护性和页面扩展能力。

## 已有页面类型

- 首页：编辑精选、方法论、品牌档案与最近更新
- 评测：评分、结论、测试说明与文章目录
- 教程：新手指南、故障排查与方法文章
- 对比：相同预算和使用场景下的横向比较
- 品牌页：品牌词资料、优势、风险和价格观察
- 专题页：用于榜单、季度观察和人群内容聚合
- 基础页：关于、联系、隐私、404
- SEO：Canonical、Open Graph、Article / Product 结构化数据、RSS、Sitemap、robots.txt

## 本地开发

```bash
npm install
npm run dev
```

生产检查：

```bash
npm run build
```

## 添加内容

文章位于以下目录：

```text
src/content/reviews/  # 评测
src/content/guides/   # 教程
src/content/compare/  # 对比
```

复制同类 Markdown 文件并修改 Frontmatter 即可。品牌档案集中维护在 `src/data/brands.ts`，全站名称和导航维护在 `src/data/site.ts`。

## 发布前清单

1. 定期复核套餐价格、流量、优惠码和外部入口。
2. 在文章中披露测试账号来源、测试日期和任何推广关系。
3. 修改 `src/data/site.ts` 中的邮箱与站点信息。
4. 将首页订阅演示表单接入真实邮件服务或后端 API。
5. 部署后提交 `/sitemap.xml` 到搜索引擎站长平台。

## 技术说明

- Astro 7 + Content Collections
- 无前端框架运行时，页面默认静态生成
- 不依赖第三方字体和外部图片，减少阻塞与隐私风险
- 响应式布局，支持 reduced-motion 偏好
