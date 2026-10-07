export type Brand = {
  slug: string;
  name: string;
  alias: string;
  summary: string;
  score: number;
  status: '持续观察' | '复测排队' | '档案更新';
  bestFor: string;
  price: string;
  strengths: string[];
  cautions: string[];
  color: string;
};

export const brands: Brand[] = [
  {
    slug: 'rocket-duck', name: '火箭鸭', alias: '嘎嘎起飞组',
    summary: '偏重流媒体与晚高峰稳定性的样本品牌档案。页面为内容结构演示，不构成实时购买建议。',
    score: 8.6, status: '持续观察', bestFor: '流媒体 / 多设备', price: '¥ 18 起', color: '#ff5c35',
    strengths: ['晚高峰波动较小', '新手配置说明完整', '多设备策略清晰'],
    cautions: ['低价套餐流量偏紧', '部分冷门地区需手动切线']
  },
  {
    slug: 'potato-cloud', name: '薯条云', alias: '脆度研究所',
    summary: '主打入门价位与轻量使用的样本品牌，用来展示品牌词落地页的完整信息骨架。',
    score: 7.9, status: '复测排队', bestFor: '预算党 / 轻量用户', price: '¥ 9.9 起', color: '#d8ff3e',
    strengths: ['入门门槛低', '套餐选项简单', '常用客户端覆盖全'],
    cautions: ['繁忙时段需要挑节点', '工单响应速度不固定']
  },
  {
    slug: 'polar-signal', name: '北极信号', alias: '低温节点站',
    summary: '强调跨区线路与办公场景的样本档案，适合承载后续实测数据、价格追踪和更新日志。',
    score: 8.2, status: '档案更新', bestFor: '远程办公 / 跨区', price: '¥ 24 起', color: '#75c7ff',
    strengths: ['跨区延迟表现均衡', '办公时段稳定', '订阅兼容性较好'],
    cautions: ['价格不算便宜', '促销规则略复杂']
  }
];
