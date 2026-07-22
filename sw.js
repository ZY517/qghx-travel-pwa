const CACHE = 'qghx-v3'
const ASSETS = ['/','/index.html','/manifest.json','/icons/icon-192.png','/icons/icon-512.png']

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)))
  self.skipWaiting()
})

self.addEventListener('fetch', e => {
  // HTML 用网络优先，确保每次打开都是最新版
  if (e.request.url.endsWith('.html') || e.request.url.endsWith('/') || e.request.url.indexOf('index.html') > -1) {
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) { const clone = res.clone(); caches.open(CACHE).then(c => c.put(e.request, clone)) }
        return res
      }).catch(() => caches.match(e.request))
    )
  } else {
    // 其他资源缓存优先
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
  }
})

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ))
  clients.claim()
})
