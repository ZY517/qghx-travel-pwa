# 青甘大环线 PWA App 开发规则

## 自动部署

修改 `index.html` 后，必须自动执行以下操作：

```bash
cd "D:/MyOneDrive/OneDrive/桌面/QG/app-pwa"
git add index.html && git commit -m "更新: <简要描述改动>" && git push
```

推送后 Netlify 会自动重新部署，站点 `https://poetic-longma-271572.netlify.app/` 约 30 秒内刷新。

## 项目结构

- `index.html` — 全部前端代码（HTML + CSS + JS 数据）
- `sw.js` — Service Worker 离线缓存
- `manifest.json` — PWA 清单
- `icons/` — App 图标

## 重要数据位置

| 内容 | 在 index.html 中搜索 |
|------|-------------------|
| 行程数据 | `const itinerary = [` |
| 拍照姿势 | `const spotPoses = [` |
| 通用造型 | `const universalPoses = [` |
| 出发清单 | `const checklist = [` |
| 避坑攻略 | `const tips = [` |
| 预算数据 | `const budget = {` |
| 天气数据 | `const weatherData = [` |
| 配色主题 | `--primary:#4A90D9` |
