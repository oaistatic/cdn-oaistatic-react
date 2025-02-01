# cdn-oaistatic
静态资源CDN,适用于`ChatGpt-Mirror-Server`及`cockroachai`等项目。

最新静态资源已迁移发布至 [https://github.com/oaistatic/oaistatic.github.io](https://github.com/oaistatic/oaistatic.github.io)

## 部署方法

创建`docker-compose.yml`文件，内容如下：

```yaml
version: '3.8'

services:
  cdn-oaistatic-react:
    image: lyy0709/cdn-oaistatic-react:latest
    build:
      context: .
      dockerfile: Dockerfile
    container_name: cdn-oaistatic-react
    ports:
      - "8642:80"
    environment:
      - ASSET_PREFIX=http://cdn.yourdomain.com
      - SANDBOX_HOST=sandbox.yourdomain.com
```
请把ASSET_PREFIX=http://yourdomain.com 后的 http://yourdomain.com 改为你的域名再启动(注意https)

然后执行`docker compose up -d`即可。

## 更新方法

执行`docker compose pull`拉取最新镜像，然后执行`docker compose up -d`重启容器即可。
