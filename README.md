# 陈俊烨 CJY · 个人作品集

Editorial / Swiss 风格的个人作品集站点。纯静态（HTML / CSS / 原生 JS），无构建步骤，可直接部署到任意云服务器或 PaaS。

## 目录结构

```
.
├── public/            # 全部静态资源（部署只需这一个目录）
│   ├── index.html     # 页面结构与内容
│   ├── styles.css     # Editorial 视觉样式
│   ├── works.js       # 数据：WORKS 作品数组 + HACKATHONS 时间线
│   └── main.js        # 渲染逻辑 + 站内 iframe 预览弹窗
├── server.js          # 零依赖 Node 生产服务器（npm start）
├── package.json
├── Dockerfile         # nginx 容器镜像
├── nginx.conf         # nginx 站点配置（gzip / 缓存 / 回退）
├── .dockerignore
└── .gitignore
```

## 本地预览

任选其一：

```bash
# 方式 A：Node（与生产一致）
npm start                      # 默认 http://localhost:8080

# 方式 B：Python 快速预览
python3 -m http.server 4321 --directory public
```

## 部署方式

### 1) 云服务器 · Docker（推荐，适合 ECS / VPS）

```bash
docker build -t cjy-portfolio .
docker run -d -p 80:80 --name cjy-portfolio cjy-portfolio
```

访问 `http://<服务器IP>`。容器内置 `/healthz` 探活端点。

### 2) 云服务器 · 直接跑 Node（无 Docker）

服务器需 Node 18+：

```bash
git clone <repo> && cd CJY-Claude
PORT=80 npm start          # 或交给 pm2 / systemd 守护
```

用 `pm2` 守护示例：

```bash
npm i -g pm2
PORT=80 pm2 start server.js --name cjy-portfolio
pm2 save && pm2 startup
```

### 3) PaaS · Zeabur / Vercel / Netlify

- **Zeabur**：直接连接仓库即可。检测到 `Dockerfile` 会用 nginx 镜像构建；也可设为 Static 服务、输出目录填 `public`。
- **Vercel / Netlify / Cloudflare Pages**：构建命令留空，发布目录（output/publish directory）填 `public`。

> 平台会自动注入 `PORT` 环境变量，`server.js` 已适配。

## 维护：新增作品

编辑 [`public/works.js`](public/works.js)，往 `WORKS` 数组里加一个对象即可自动生成可点击预览块：

```js
{
  title: "未来课堂智能体",
  cat: "AI Agent · 教育",
  desc: "一句话描述",
  url: "https://你的作品链接",
  tags: ["Agent", "多模态"],
  // image: "封面图地址"   // 可选，优先于默认底色
}
```

点击作品块会在**站内 iframe 弹窗**预览，不跳转；若目标站点设置了 `X-Frame-Options` / CSP 禁止嵌入，6 秒后自动提供「在新窗口打开」兜底。
