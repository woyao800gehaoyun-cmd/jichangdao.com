export type Brand = {
  slug: string;
  name: string;
  alias: string;
  summary: string;
  score: number;
  status: '持续观察' | '复测排队' | '档案更新';
  bestFor: string;
  price: string;
  traffic: string;
  lineType: string;
  coupon: string;
  affiliateUrl: string;
  reviewUrl: string;
  primary: boolean;
  strengths: string[];
  cautions: string[];
  color: string;
};

export const brands: Brand[] = [
  {
    slug: 'guangnianti', name: '光年梯', alias: '本期主推 IEPL 选手',
    summary: '18 元月付提供 120G 流量的 IEPL 专线机场，套餐信息清晰，适合希望兼顾线路、流量和月付成本的用户。',
    score: 9.2, status: '持续观察', bestFor: '综合使用 / 流媒体 / AI', price: '¥ 18 / 月', traffic: '120G / 月', lineType: 'IEPL 专线', coupon: 'GNT80',
    affiliateUrl: 'https://Rumors.gntaff.com/#/?code=Mclks3w5', reviewUrl: '/reviews/guangnianti-review', primary: true, color: '#ff5c35',
    strengths: ['18 元月付包含 120G，单位流量成本更有优势', 'IEPL 专线定位，适合看重高峰期体验的用户', '套餐容量覆盖多数个人日常使用', '优惠码 GNT80 可在结算前尝试使用'],
    cautions: ['线路表现会因地区、运营商和时段变化', '优惠规则与节点可用性应以官网实时页面为准']
  },
  {
    slug: 'shunyun', name: '瞬云机场', alias: 'IPLC 均衡套餐',
    summary: '18 元月付、100G 流量的 IPLC 专线机场，适合希望用固定预算获得专线套餐的用户。',
    score: 8.7, status: '持续观察', bestFor: '办公 / 日常视频 / 跨境场景', price: '¥ 18 / 月', traffic: '100G / 月', lineType: 'IPLC 专线', coupon: '20OFF',
    affiliateUrl: 'https://ddd.jichang.best/#/register?code=SWAVvMOV', reviewUrl: '/reviews/shunyun-review', primary: false, color: '#75c7ff',
    strengths: ['18 元月付进入 IPLC 专线套餐', '100G 流量适合中等强度使用', '优惠码 20OFF 可降低首次体验成本'],
    cautions: ['重度高清视频用户需关注剩余流量', 'IPLC 标签不代表所有节点在所有地区表现一致']
  },
  {
    slug: 'yuntu', name: '云图机场', alias: '100G IEPL 方案',
    summary: '18 元月付、100G 流量的 IEPL 专线机场，定位清晰，适合常规浏览、视频和多端切换。',
    score: 8.6, status: '持续观察', bestFor: '日常使用 / 多端切换', price: '¥ 18 / 月', traffic: '100G / 月', lineType: 'IEPL 专线', coupon: 'yt88',
    affiliateUrl: 'https://super.ytjcok.org/#/register?code=COsTypDq', reviewUrl: '/reviews/yuntu-review', primary: false, color: '#d8ff3e',
    strengths: ['月付门槛适中', 'IEPL 专线定位便于按需求筛选', '优惠码 yt88 方便首次购买时核对优惠'],
    cautions: ['套餐和优惠有效期需要在购买页确认', '100G 对多设备重度使用可能偏紧']
  },
  {
    slug: 'kunpeng', name: '鲲鹏加速', alias: '12 元直连入门款',
    summary: '月付 12 元的便宜直连机场，适合预算优先、使用强度较轻并愿意自行选择节点的用户。',
    score: 7.9, status: '持续观察', bestFor: '轻量用户 / 预算优先', price: '¥ 12 / 月', traffic: '以官网为准', lineType: '直连线路', coupon: '暂无优惠码',
    affiliateUrl: 'https://kunpengjiasu.com/#/register?code=Yd7XpCEQ', reviewUrl: '/reviews/kunpeng-review', primary: false, color: '#ff90c8',
    strengths: ['12 元月付，试错成本较低', '直连线路结构简单，适合轻量日常使用', '适合作为入门或备用方案比较'],
    cautions: ['直连线路在晚高峰更依赖本地运营商与拥堵情况', '当前暂无可提供的优惠码']
  }
];
