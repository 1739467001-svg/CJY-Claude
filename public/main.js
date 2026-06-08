/* ===== 工具 ===== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// 编辑风格默认底色：墨色与朱红的低调渐变
const GRADIENTS = [
  "linear-gradient(150deg,#2a2722,#1b1916)",
  "linear-gradient(150deg,#3a2118,#1b1916)",
  "linear-gradient(150deg,#d8442a,#7a2415)",
  "linear-gradient(150deg,#403a30,#1b1916)",
  "linear-gradient(150deg,#5a2a1e,#1b1916)",
];

/* ===== 国际化 i18n ===== */
let LANG = localStorage.getItem("cjy-lang") || "zh"; // 默认中文

// 动态文案字典（用于 JS 生成的内容）
const I18N = {
  badge: {
    award:     { zh: "获奖",        en: "Award" },
    host:      { zh: "主办 / 管理", en: "Organizer" },
    volunteer: { zh: "志愿者",      en: "Volunteer" },
    first:     { zh: "里程碑",      en: "Milestone" },
    join:      { zh: "参赛",        en: "Competitor" },
  },
  workOpen:     { zh: "预览 ↗",       en: "Preview ↗" },
  emptyTitle:   { zh: "作品即将上线 ✨", en: "Works coming soon ✨" },
  emptyBody:    {
    zh: "把你的作品链接按 works.js 中的格式填入 WORKS 数组，<br/>每个作品会自动生成一个可点击的预览块。",
    en: "Add your project links to the WORKS array in works.js —<br/>each one becomes a clickable preview block automatically.",
  },
};
const t = (key) => (I18N[key] && I18N[key][LANG]) || I18N[key]?.zh || "";

// 切换页面中带 [data-en] 的静态元素
function applyStaticI18n() {
  document.documentElement.lang = LANG === "en" ? "en" : "zh-CN";
  $$("[data-en]").forEach((el) => {
    if (el.dataset.zh === undefined) el.dataset.zh = el.innerHTML; // 首次缓存中文原文
    el.innerHTML = LANG === "en" ? el.dataset.en : el.dataset.zh;
  });
  // 语言切换按钮高亮
  $$("#langToggle [data-lang]").forEach((s) =>
    s.classList.toggle("active", s.dataset.lang === LANG)
  );
}

function setLang(lang) {
  LANG = lang;
  localStorage.setItem("cjy-lang", lang);
  applyStaticI18n();
  renderWorks();
  renderTimeline();
  observeReveal();
}

/* ===== 渲染作品块 ===== */
function renderWorks() {
  const grid = $("#worksGrid");
  if (!grid) return;
  if (!WORKS.length) {
    grid.innerHTML = `<div class="work-empty reveal">
      <strong>${t("emptyTitle")}</strong>
      ${t("emptyBody")}
    </div>`;
    return;
  }
  grid.innerHTML = WORKS.map((w, i) => {
    const pick = (zh, en) => (LANG === "en" && en) ? en : zh;
    const title = pick(w.title, w.title_en);
    const cat = pick(w.cat, w.cat_en);
    const desc = pick(w.desc, w.desc_en);
    const bg = w.image
      ? `<div class="work-thumb" style="background-image:url('${w.image}')"></div>`
      : `<div class="work-gradient" style="background:${w.gradient || GRADIENTS[i % GRADIENTS.length]}"></div>`;
    const tags = (w.tags || []).map((x) => `<span>${x}</span>`).join("");
    return `<article class="work-card has-media reveal" data-open-frame="${w.url}" data-frame-title="${title}">
      ${bg}
      <div class="work-overlay"></div>
      <div class="work-open">${t("workOpen")}</div>
      <div class="work-body">
        ${cat ? `<span class="work-cat">${cat}</span>` : ""}
        <h3>${title}</h3>
        ${desc ? `<p>${desc}</p>` : ""}
        ${tags ? `<div class="work-tags">${tags}</div>` : ""}
      </div>
    </article>`;
  }).join("");
}

/* ===== 渲染黑客松时间线 ===== */
function renderTimeline() {
  const tl = $("#timeline");
  if (!tl) return;
  const cls = { award: "badge-award", host: "badge-host", volunteer: "badge-volunteer", first: "badge-first", join: "badge-volunteer" };
  tl.innerHTML = HACKATHONS.map((h) => {
    const title = LANG === "en" && h.title_en ? h.title_en : h.title;
    const note = LANG === "en" && h.note_en ? h.note_en : h.note;
    const badge = (I18N.badge[h.type] && I18N.badge[h.type][LANG]) || "";
    return `<div class="tl-item reveal">
      <div class="tl-card">
        <span class="tl-date">${h.date}</span>
        <div class="tl-main"><h3>${title}</h3><p>${note}</p></div>
        <span class="tl-badge ${cls[h.type] || "badge-volunteer"}">${badge}</span>
      </div>
    </div>`;
  }).join("");
}

/* ===== 站内预览弹窗 ===== */
const modal = $("#frameModal");
const frame = $("#frameView");
const loader = $("#frameLoader");
const fallback = $("#frameFallback");
let loadTimer = null;

function openFrame(url, title) {
  $("#frameTitle").textContent = title || url;
  $("#frameOpenNew").href = url;
  $("#fallbackOpen").href = url;
  loader.hidden = false;
  fallback.hidden = true;
  frame.style.visibility = "hidden";
  frame.src = url;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  clearTimeout(loadTimer);
  loadTimer = setTimeout(() => {
    if (loader.hidden) return;
    loader.hidden = true;
    fallback.hidden = false;
  }, 6000);
}

function closeFrame() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  clearTimeout(loadTimer);
  setTimeout(() => { frame.src = "about:blank"; }, 250);
}

frame.addEventListener("load", () => {
  if (frame.src === "about:blank" || !frame.src) return;
  loader.hidden = true;
  frame.style.visibility = "visible";
  clearTimeout(loadTimer);
});

/* ===== 全局事件委托 ===== */
document.addEventListener("click", (e) => {
  const opener = e.target.closest("[data-open-frame]");
  if (opener) { e.preventDefault(); openFrame(opener.dataset.openFrame, opener.dataset.frameTitle); return; }
  if (e.target.closest("[data-close-frame]")) closeFrame();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("open")) closeFrame(); });

/* ===== 语言切换按钮 ===== */
$("#langToggle")?.addEventListener("click", () => setLang(LANG === "zh" ? "en" : "zh"));

/* ===== 移动端汉堡菜单 ===== */
const nav = $("#nav");
const burger = $("#navBurger");
const navLinks = $("#navLinks");
function closeMenu() { nav.classList.remove("menu-open"); burger?.setAttribute("aria-expanded", "false"); }
burger?.addEventListener("click", () => {
  const open = nav.classList.toggle("menu-open");
  burger.setAttribute("aria-expanded", String(open));
});
navLinks?.addEventListener("click", (e) => { if (e.target.closest("a")) closeMenu(); });

/* ===== 导航滚动态 ===== */
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 40));

/* ===== 数字滚动动画 ===== */
function animateCount(el) {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || "";
  let cur = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  const tick = () => {
    cur = Math.min(target, cur + step);
    el.textContent = cur + suffix;
    if (cur < target) requestAnimationFrame(tick);
  };
  tick();
}

/* ===== 滚动入场 + 计数（全局观察器，支持动态节点） ===== */
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); revealIO.unobserve(en.target); } });
}, { threshold: 0.12 });

function observeReveal() {
  $$(".reveal, .section, .work-card, .tl-item").forEach((el) => {
    el.classList.add("reveal");
    if (!el.classList.contains("in")) revealIO.observe(el);
  });
}

const countIO = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { animateCount(en.target); countIO.unobserve(en.target); } });
}, { threshold: 0.5 });

/* ===== 启动 ===== */
applyStaticI18n();
renderWorks();
renderTimeline();
observeReveal();
$$(".stat-num").forEach((el) => countIO.observe(el));
