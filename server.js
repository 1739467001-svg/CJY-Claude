/**
 * 零依赖静态服务器 —— 用于在云服务器 / 容器中直接运行（仅需 Node 18+）。
 * 启动：node server.js   或   npm start
 * 端口：读取环境变量 PORT（云平台通常自动注入），本地默认 8080。
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "0.0.0.0";
const ROOT = path.join(__dirname, "public");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

const server = http.createServer((req, res) => {
  // 健康检查端点，方便云平台/负载均衡探活
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("ok");
  }

  // 解析路径并防止目录穿越
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";
  const filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 找不到资源时回退到首页（单页站点友好）
      return fs.readFile(path.join(ROOT, "index.html"), (e, html) => {
        if (e) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": MIME[".html"] });
        res.end(html);
      });
    }
    const ext = path.extname(filePath).toLowerCase();
    const type = MIME[ext] || "application/octet-stream";
    const cache = ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable";
    res.writeHead(200, { "Content-Type": type, "Cache-Control": cache });
    res.end(data);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`✓ 作品集已启动：http://${HOST}:${PORT}`);
});
