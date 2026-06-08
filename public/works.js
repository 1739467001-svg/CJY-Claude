/* =====================================================================
   作品数据 —— 以后添加作品，只需在 WORKS 数组里加一个对象即可。
   双语字段：带 _en 后缀的为英文，缺省时回退到中文。
     title / title_en   作品名称
     cat   / cat_en      分类标签
     desc  / desc_en     一句话描述
     url                 作品链接（点击后在站内弹窗 iframe 中预览）
     tags                技术 / 关键词标签数组（中英通用）
     gradient            卡片背景渐变（没有 image 时用），可选
     image               封面图地址，可选（优先级高于 gradient）
   ===================================================================== */
const WORKS = [
  // 示例占位：把你的作品按下面格式填进来即可
  // {
  //   title: "未来课堂智能体", title_en: "Future Classroom Agent",
  //   cat: "AI Agent · 教育", cat_en: "AI Agent · Education",
  //   desc: "面向未来课堂的多模态教学智能体。",
  //   desc_en: "A multimodal teaching agent for the classroom of the future.",
  //   url: "https://your-work-link.com",
  //   tags: ["Agent", "多模态", "教育"],
  //   gradient: "linear-gradient(150deg,#d8442a,#7a2415)"
  // },
];

/* =====================================================================
   黑客松 & 赛事时间线
     type: award(获奖) | host(主办/管理) | volunteer(志愿者) | first(里程碑) | join(参赛)
   ===================================================================== */
const HACKATHONS = [
  { date: "2025.11.22", type: "first",
    title: "魔搭社区开发者嘉年华 · 支付宝 MCP 开发黑客松",
    title_en: "ModelScope Developer Carnival · Alipay MCP Hackathon",
    note: "第一次参加黑客松 🚀", note_en: "My very first hackathon 🚀" },
  { date: "2025.11.30", type: "join",
    title: "Way to AGI 上海站",
    title_en: "Way to AGI · Shanghai",
    note: "全球 30+ 城市联动 · 泰国清迈联动 · 第二次黑客松", note_en: "30+ cities worldwide · linked with Chiang Mai · 2nd hackathon" },
  { date: "2026.01.08", type: "award",
    title: "浙工商信电人工智能学院 AI 应用创新大赛",
    title_en: "ZJSU AI Application Innovation Competition",
    note: "一等奖 🏆", note_en: "First Prize 🏆" },
  { date: "2026.01.16–18", type: "volunteer",
    title: "环球黑客松 · 杭州站",
    title_en: "Global Hackathon · Hangzhou",
    note: "志愿者 + 参赛者", note_en: "Volunteer + Competitor" },
  { date: "2026.01.22", type: "award",
    title: "百度千帆 Agent 训练营",
    title_en: "Baidu Qianfan Agent Camp",
    note: "最佳技术奖 🏆", note_en: "Best Technology Award 🏆" },
  { date: "2026.01.23–25", type: "volunteer",
    title: "上海黑客松 · Less is More",
    title_en: "Shanghai Hackathon · Less is More",
    note: "志愿者 + 参赛者", note_en: "Volunteer + Competitor" },
  { date: "2026.01.31–02.02", type: "volunteer",
    title: "南京模法学院 S2 赛季 · 以赛促产黑客松",
    title_en: "Nanjing Mofa Academy S2 · Hackathon",
    note: "志愿者", note_en: "Volunteer" },
  { date: "2026.02.07–08", type: "host",
    title: "全国 10 城联动汤泉黑客松 · 太原站",
    title_en: "10-City Tangquan Hackathon · Taiyuan",
    note: "主办方负责人 · 第一次从志愿者转变为管理者视角 ⭐", note_en: "Lead Organizer · my first shift from volunteer to manager ⭐" },
  { date: "2026.03.07–08", type: "host",
    title: "中国高校联盟 AI Hackathon Tour",
    title_en: "China University Alliance · AI Hackathon Tour",
    note: "协办方 · 浙大线下复赛物资与协办", note_en: "Co-organizer · ZJU offline finals logistics" },
  { date: "2026.03.14–15", type: "host",
    title: "中国高校联盟 AI Hackathon Tour · 西安交大站",
    title_en: "China University Alliance · AI Hackathon Tour · XJTU",
    note: "协办方 · 线下复赛", note_en: "Co-organizer · offline finals" },
  { date: "2026.03.28", type: "award",
    title: "GDPS Astron 产业智变黑客松",
    title_en: "GDPS Astron Industry Hackathon",
    note: "一等奖 🏆", note_en: "First Prize 🏆" },
  { date: "2026.03.29", type: "award",
    title: "商汤龙虾节 · SenseAudio & AudioClaw 多场景 Skills 创新赛",
    title_en: "SenseTime Lobster Festival · SenseAudio & AudioClaw Skills Contest",
    note: "二等奖 🥈", note_en: "Second Prize 🥈" },
  { date: "2026.03.29", type: "award",
    title: "上海徐汇 · Agent 进化酒馆黑客松",
    title_en: "Shanghai Xuhui · Agent Evolution Tavern Hackathon",
    note: "最佳人气奖 🌟", note_en: "Best Popularity Award 🌟" },
  { date: "2026.04.09", type: "volunteer",
    title: "小红书黑客松巅峰赛",
    title_en: "RED (Xiaohongshu) Hackathon Finals",
    note: "志愿者工作人员 + 参赛者", note_en: "Staff / Volunteer + Competitor" },
  { date: "2026.04.23", type: "join",
    title: "春潮 Spring · 深圳 OpenClaw 黑客松",
    title_en: "Spring Tide · Shenzhen OpenClaw Hackathon",
    note: "参赛者", note_en: "Competitor" },
  { date: "2026.05.01", type: "award",
    title: "南京 Flux 南客松 S2 · Life's Short, Play More 赛道",
    title_en: "Nanjing Flux Hackathon S2 · 'Life's Short, Play More'",
    note: "银奖 🥈", note_en: "Silver Award 🥈" },
];
