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
  // ===== 实景作品 · 数字孪生 & 系统 =====
  {
    title: "智慧港口数字孪生", title_en: "Smart Port Digital Twin",
    cat: "3D 数字孪生 · 港口", cat_en: "Digital Twin · Port",
    desc: "Cargo Claw v3.0 · 多智能体（箱单/堆叠/安全/调度/指令 OC）协同，覆盖集装箱订舱→内陆交付全生命周期。",
    desc_en: "Cargo Claw v3.0 · a multi-agent port digital twin covering the full container lifecycle from booking to inland delivery.",
    url: "https://cargo-claw.vercel.app",
    tags: ["数字孪生", "Multi-Agent", "Three.js"],
    image: "img/port.jpg"
  },
  {
    title: "数字海上油田 · 深蓝钻井平台", title_en: "DeepBlue Offshore Rig Twin",
    cat: "3D 数字孪生 · 能源", cat_en: "Digital Twin · Energy",
    desc: "DeepBlue Rig · 3D 钻井平台与海况模拟，实时设备健康监测，天气/时段/画质可调。",
    desc_en: "DeepBlue Rig · a 3D offshore drilling platform & sea-state simulation with live equipment health monitoring.",
    url: "https://deepblue-rig.vercel.app/",
    tags: ["数字孪生", "3D", "仿真"],
    image: "img/rig.jpg"
  },
  {
    title: "成都天府国际机场数字孪生", title_en: "Chengdu Tianfu Airport Twin",
    cat: "3D 数字孪生 · 航空", cat_en: "Digital Twin · Aviation",
    desc: "天府 TWIN · FCFS 与「智能调度」A/B 影子仿真，准点率/延误/跑道占用实时对比。",
    desc_en: "Tianfu TWIN · A/B shadow simulation of FCFS vs. smart scheduling with live on-time / delay / runway metrics.",
    url: "http://aerotwin-tfu.vercel.app/",
    tags: ["数字孪生", "调度算法", "3D"],
    image: "img/airport.jpg"
  },
  {
    title: "研究生院督导管理系统", title_en: "Graduate Supervision System",
    cat: "生产系统 · 教育", cat_en: "Production System · Education",
    desc: "浙工商研究生院督导评价平台：1431 门课程 / 22 学院 / 588 教师，多角色协作（生产环境）。",
    desc_en: "ZJSU Graduate School teaching-supervision platform: 1431 courses / 22 schools / 588 teachers, multi-role (in production).",
    url: "http://121.196.217.243/login",
    tags: ["全栈", "教育数字化", "生产环境"],
    image: "img/dudao.jpg"
  },

  // ===== 实景作品 · 3D 沉浸 & 校园 =====
  {
    title: "会议室预约小龙虾", title_en: "Meeting-Room Booking Lobster",
    cat: "🦞 Agent · 校园", cat_en: "🦞 Agent · Campus",
    desc: "AI 指挥中心：自然语言一句话搞定高校会议室预约，意图解析 + 冲突检测 + 智能推荐，效率 30×。",
    desc_en: "An AI command center: book a campus meeting room with one sentence — intent parsing, conflict detection, 30× faster.",
    url: "https://meetroomshrimp-gvfhrxz8.manus.space",
    tags: ["AI Agent", "NLP", "未来课堂"],
    image: "img/meetroom.jpg"
  },
  {
    title: "首届 AI 黑客松 · 数智星光", title_en: "AI Hackathon Gallery · Starlight",
    cat: "平台 · 校内", cat_en: "Platform · Campus",
    desc: "浙工商信电 / 人工智能学院首届 AI 黑客松学生作品展，星河式 3D 画廊逐一点亮 18 份作品。",
    desc_en: "Student-works gallery for ZJSU's first AI Hackathon — a galaxy-style 3D showcase of 18 projects.",
    url: "http://43.133.22.250:8089/",
    tags: ["3D 画廊", "Three.js", "校内"],
    image: "img/gallery.jpg"
  },
  {
    title: "虚拟看房 · 样板间漫游", title_en: "Virtual House Tour",
    cat: "3D 沉浸 · 地产", cat_en: "Immersive 3D · Real Estate",
    desc: "浏览器内沉浸式 3D 看房，灯光 / 家具 / 户型 / 装修实时可调，支持 VR。",
    desc_en: "In-browser immersive 3D house tour with live lighting / furniture / layout / finish controls, VR-ready.",
    url: "https://virtual-reality-mocha.vercel.app/",
    tags: ["WebGL", "3D", "VR"],
    image: "img/house.jpg"
  },
  {
    title: "太阳系模拟与漫游", title_en: "Solar System Explorer",
    cat: "3D 沉浸 · 科普", cat_en: "Immersive 3D · Science",
    desc: "3D 八大行星轨道模拟，可调速、点击行星飞越漫游，轨道 / 标签可切换。",
    desc_en: "A 3D solar-system simulation: adjustable speed, click-to-fly to any planet, toggleable orbits & labels.",
    url: "https://virtual-universe-eight.vercel.app/",
    tags: ["WebGL", "3D", "可视化"],
    image: "img/solar.jpg"
  },

  // ===== AI 应用 & 工具 =====
  {
    title: "Kimi K2.5 Agent 工作台", title_en: "Kimi K2.5 Agent Workbench",
    cat: "Agent · LLM", cat_en: "Agent · LLM",
    desc: "基于 Kimi K2.5 的 Agent 模式应用，支持多步任务规划与执行。",
    desc_en: "A Kimi K2.5 agent-mode app supporting multi-step task planning and execution.",
    url: "https://wu5dpeypjtjvw.ok.kimi.link",
    tags: ["Agent", "LLM"],
    gradient: "linear-gradient(150deg,#3a2f6e,#1d1838)"
  },
  {
    title: "Google AI Studio 工作台", title_en: "Google AI Studio Workbench",
    cat: "多模态 · 复刻", cat_en: "Multimodal · Clone",
    desc: "Google AI Studio 风格的多模态 AI 工作台，自建并部署上线。",
    desc_en: "A self-built, deployed multimodal AI workbench in the style of Google AI Studio.",
    url: "https://kaiyan-google.zeabur.app",
    tags: ["多模态", "全栈"],
    gradient: "linear-gradient(150deg,#1a5e8a,#0d2c44)"
  },
  {
    title: "Manus 1.6 Max 通用 Agent", title_en: "Manus 1.6 Max General Agent",
    cat: "通用 Agent", cat_en: "General Agent",
    desc: "Manus 1.6 Max 模式的通用智能体平台，自建复刻并部署。",
    desc_en: "A self-built general-purpose agent platform in the style of Manus 1.6 Max.",
    url: "https://kaiyan-manus.zeabur.app",
    tags: ["通用 Agent", "全栈"],
    gradient: "linear-gradient(150deg,#2d2a26,#15110d)"
  },
  {
    title: "3D 集装箱装载规划工具", title_en: "3D Container Loading Planner",
    cat: "可视化 · 算法", cat_en: "Visualization · Algorithm",
    desc: "可视化的 3D 集装箱装载规划工具，自动求解并演示装箱方案。",
    desc_en: "A visual 3D container-loading planner that auto-solves and animates packing plans.",
    url: "https://smart-container.zeabur.app/",
    tags: ["3D", "算法", "可视化"],
    gradient: "linear-gradient(150deg,#b8351f,#7a2415)"
  },
  {
    title: "动物智能复习指南", title_en: "Animal Intelligence Study Guide",
    cat: "教育 · 交互", cat_en: "Education · Interactive",
    desc: "“动物智能”主题的交互式复习指南，把知识点做成可学习的网站。",
    desc_en: "An interactive study guide on animal intelligence, turning a syllabus into a learnable website.",
    url: "https://animalintelligence-study.zeabur.app",
    tags: ["教育", "交互"],
    gradient: "linear-gradient(150deg,#3f6e3a,#1d3818)"
  },

  // ===== Agent 智能体 =====
  {
    title: "AutoTune-Master", title_en: "AutoTune-Master",
    cat: "多智能体 · 调优", cat_en: "Multi-Agent · Tuning",
    desc: "面向大模型调优的多智能体协同优化平台，基于百度 AppBuilder。",
    desc_en: "A multi-agent collaborative optimization platform for LLM fine-tuning, built on Baidu AppBuilder.",
    url: "https://appbuilder.baidu.com/s/srPSzqHn",
    tags: ["Multi-Agent", "LLM 调优"],
    gradient: "linear-gradient(150deg,#1a5e8a,#13233a)"
  },
  {
    title: "百宝箱 · 心灵港湾 Agent", title_en: "Mind Harbor · Companion Agent",
    cat: "情绪陪伴", cat_en: "Emotional Companion",
    desc: "心理陪伴 / 情绪支持智能体，基于阿里“百宝箱”搭建。",
    desc_en: "A psychological-companion / emotional-support agent built on Alibaba's Tbox.",
    url: "https://www.tbox.cn/share/202511APt1Dm00566805?platform=WebService",
    tags: ["AI Agent", "情绪陪伴"],
    gradient: "linear-gradient(150deg,#9a5a6e,#3a1d28)"
  },
  {
    title: "心光祈愿", title_en: "Light of Wishes",
    cat: "互动 · 文化", cat_en: "Interactive · Culture",
    desc: "数字时代的祈福——互动祈愿应用，基于秒搭 Miaoda 制作。",
    desc_en: "Blessings for the digital age — an interactive wish-making app built on Miaoda.",
    url: "https://app-8ewx9e06r6kh.appmiaoda.com",
    tags: ["互动", "文化"],
    gradient: "linear-gradient(150deg,#c8842a,#7a4a15)"
  },
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
  { date: "2026.03.27–29", type: "volunteer",
    title: "GDPS · 上海全球开发者先锋大会",
    title_en: "GDPS · Shanghai Global Developer Pioneer Summit",
    note: "志愿者服务", note_en: "Volunteer" },
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
  { date: "2026.05.31", type: "host",
    title: "上海外滩 FTC! · 繁星计划 · FunSkills 初赛 + 决赛",
    title_en: "Shanghai Bund FTC! · Starlight Plan · FunSkills",
    note: "工作人员", note_en: "Staff" },
  { date: "2026.06.12", type: "host",
    title: "浙工商信电 / 人工智能学院 · 首届 AI 黑客松大赛",
    title_en: "ZJSU First AI Hackathon",
    note: "宣传落地设计 · 主办", note_en: "Promotion & on-site design · Organizer" },
];
