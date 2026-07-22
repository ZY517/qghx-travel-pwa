# 青甘大环线 App 开发规则

## 双端同步

存在两个项目，**任何功能改动必须两端同步**：

| 项目 | 路径 | 部署方式 |
|------|------|----------|
| **PWA** | `app-pwa/` | Netlify 自动部署 |
| **微信小程序** | `travel-guide/` | 微信开发者工具预览 |

改动顺序：先改 PWA → 再同步到小程序。

## PWA 自动部署

修改后自动执行：
```bash
cd "D:/MyOneDrive/OneDrive/桌面/QG/app-pwa"
git add . && git commit -m "更新: <描述>" && git push
```
Netlify 站点 `https://poetic-longma-271572.netlify.app/` 30秒内刷新。

## 数据位置

| 内容 | PWA (index.html) | 小程序 (utils/) |
|------|-----------------|-----------------|
| 行程 | `const itinerary = [` | `data.js` |
| 拍照 | `const spotPoses = [` | `photo-data.js` |
| 坐标 | `const spotCoords = {` | `data.js` |
| 清单 | `const checklist = [` | `data.js` |
| 配色 | `--primary:#4A90D9` | `app.wxss` |
