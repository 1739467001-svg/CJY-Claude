# 生产级静态托管：nginx，体积小、自带 gzip 与缓存策略。
# 适合任意云服务器（阿里云 ECS / 腾讯云 / VPS）及 Zeabur 等 PaaS。
FROM nginx:1.27-alpine

# 自定义 nginx 配置（gzip、缓存、SPA 回退）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 拷贝静态资源
COPY public/ /usr/share/nginx/html/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -q --spider http://localhost/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
