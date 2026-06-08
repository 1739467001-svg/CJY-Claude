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

/* ===== 渲染作品块 ===== */
function renderWorks() {
  const grid = $("#worksGrid");
  if (!grid) return;
  if (!WORKS.length) {
    grid.innerHTML = `<div class="work-empty">
      <strong>作品即将上线 ✨</strong>
      把你的作品链接按 works.js 中的格式填入 WORKS 数组，<br/>
      每个作品会自动生成一个可点击的预览块。
    </div>`;
    return;
  }
  grid.innerHTML = WORKS.map((w, i) => {
    const bg = w.image
      ? `<div class="work-thumb" style="background-image:url('${w.image}')"></div>`
      : `<div class="work-gradient" style="background:${w.gradient || GRADIENTS[i % GRADIENTS.length]}"></div>`;
    const tags = (w.tags || []).map(t => `<span>${t}</span>`).join("");
    return `<article class="work-card has-media reveal" data-open-frame="${w.url}" data-frame-title="${w.title}">
      ${bg}
      <div class="work-overlay"></div>
      <div class="work-open">预览 ↗</div>
      <div class="work-body">
        ${w.cat ? `<span class="work-cat">${w.cat}</span>` : ""}
        <h3>${w.title}</h3>
        ${w.desc ? `<p>${w.desc}</p>` : ""}
        ${tags ? `<div class="work-tags">${tags}</div>` : ""}
      </div>
    </article>`;
  }).join("");
}

/* ===== 渲染黑客松时间线 ===== */
function renderTimeline() {
  const tl = $("#timeline");
  if (!tl) return;
  const badge = { award: "获奖", host: "主办 / 管理", volunteer: "志愿者", first: "里程碑", join: "参赛" };
  const cls = { award: "badge-award", host: "badge-host", volunteer: "badge-volunteer", first: "badge-first", join: "badge-volunteer" };
  tl.innerHTML = HACKATHONS.map(h => `
    <div class="tl-item reveal">
      <div class="tl-card">
        <span class="tl-date">${h.date}</span>
        <h3>${h.title}</h3>
        <p>${h.note}</p>
        <span class="tl-badge ${cls[h.type] || "badge-volunteer"}">${badge[h.type] || ""}</span>
      </div>
    </div>`).join("");
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

  // 若 6 秒内 iframe 仍未触发 load（多半被 X-Frame-Options / CSP 拦截），给出兜底
  clearTimeout(loadTimer);
  loadTimer = setTimeout(() => {
    if (loader.hidden) return; // 已加载成功
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

/* 事件委托：任何带 data-open-frame 的元素都能触发预览 */
document.addEventListener("click", e => {
  const opener = e.target.closest("[data-open-frame]");
  if (opener) {
    e.preventDefault();
    openFrame(opener.dataset.openFrame, opener.dataset.frameTitle);
    return;
  }
  if (e.target.closest("[data-close-frame]")) closeFrame();
});
document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closeFrame(); });

/* ===== 导航滚动态 ===== */
const nav = $("#nav");
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

/* ===== 滚动入场 + 计数触发 ===== */
function initObservers() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  $$(".reveal, .section, .work-card, .tl-item").forEach(el => { el.classList.add("reveal"); io.observe(el); });

  const co = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { animateCount(en.target); co.unobserve(en.target); }
    });
  }, { threshold: 0.5 });
  $$(".stat-num").forEach(el => co.observe(el));
}

/* ===== 启动 ===== */
renderWorks();
renderTimeline();
initObservers();
