/* =====================================================================
   作品数据 —— 以后添加作品，只需在 WORKS 数组里加一个对象即可。
   字段说明：
     title    作品名称
     cat      分类标签（小写，显示在卡片顶部）
     desc     一句话描述
     url      作品链接（点击后在站内弹窗 iframe 中预览）
     tags     技术 / 关键词标签数组
     gradient 卡片背景渐变（没有 image 时用），可选
     image    封面图地址，可选（优先级高于 gradient）
   ===================================================================== */
const WORKS = [
  // 示例占位：把你的作品按下面格式填进来即可
  // {
  //   title: "未来课堂智能体",
  //   cat: "AI Agent · 教育",
  //   desc: "面向未来课堂的多模态教学智能体。",
  //   url: "https://your-work-link.com",
  //   tags: ["Agent", "多模态", "教育"],
  //   gradient: "linear-gradient(135deg,#7c6bff,#21d4fd)"
  // },
];

/* =====================================================================
   黑客松 & 赛事时间线
     type: award(获奖) | host(主办/管理) | volunteer(志愿者) | first(里程碑) | join(参赛)
   ===================================================================== */
const HACKATHONS = [
  { date: "2025.11.22", title: "魔搭社区开发者嘉年华 · 支付宝 MCP 开发黑客松", note: "第一次参加黑客松 🚀", type: "first" },
  { date: "2025.11.30", title: "Way to AGI 上海站", note: "全球 30+ 城市联动 · 泰国清迈联动 · 第二次黑客松", type: "join" },
  { date: "2026.01.08", title: "浙工商信电人工智能学院 AI 应用创新大赛", note: "一等奖 🏆", type: "award" },
  { date: "2026.01.16–18", title: "环球黑客松 · 杭州站", note: "志愿者 + 参赛者", type: "volunteer" },
  { date: "2026.01.22", title: "百度千帆 Agent 训练营", note: "最佳技术奖 🏆", type: "award" },
  { date: "2026.01.23–25", title: "上海黑客松 · Less is More", note: "志愿者 + 参赛者", type: "volunteer" },
  { date: "2026.01.31–02.02", title: "南京模法学院 S2 赛季 · 以赛促产黑客松", note: "志愿者", type: "volunteer" },
  { date: "2026.02.07–08", title: "全国 10 城联动汤泉黑客松 · 太原站", note: "主办方负责人 · 第一次从志愿者转变为管理者视角 ⭐", type: "host" },
  { date: "2026.03.07–08", title: "中国高校联盟 AI Hackathon Tour", note: "协办方 · 浙大线下复赛物资与协办", type: "host" },
  { date: "2026.03.14–15", title: "中国高校联盟 AI Hackathon Tour · 西安交大站", note: "协办方 · 线下复赛", type: "host" },
  { date: "2026.03.28", title: "GDPS Astron 产业智变黑客松", note: "一等奖 🏆", type: "award" },
  { date: "2026.03.29", title: "商汤龙虾节 · SenseAudio & AudioClaw 多场景 Skills 创新赛", note: "二等奖 🥈", type: "award" },
  { date: "2026.03.29", title: "上海徐汇 · Agent 进化酒馆黑客松", note: "最佳人气奖 🌟", type: "award" },
  { date: "2026.04.09", title: "小红书黑客松巅峰赛", note: "志愿者工作人员 + 参赛者", type: "volunteer" },
  { date: "2026.04.23", title: "春潮 Spring · 深圳 OpenClaw 黑客松", note: "参赛者", type: "join" },
  { date: "2026.05.01", title: "南京 Flux 南客松 S2 · Life's Short, Play More 赛道", note: "银奖 🥈", type: "award" },
];
