const CACHE_NAME = 'paper-bird-v1'

const resourcesToCache = [
  'assets/images/background.png',
  'assets/images/bird.png',
  'assets/images/flower1.png',
  'assets/images/flower2.png',
  'assets/images/ground.png',
  'assets/images/nest.png',
  'assets/images/paper.png',
  'assets/images/pow1.png',
  'assets/images/pow2.png',
  'assets/images/pow3.png',
  'assets/images/tower.png',
  'assets/images/wing-down.png',
  'assets/images/wing-up.png',

  'assets/audio/birds-singing.mp3',
  'assets/audio/chicken-explosion.mp3',
  'assets/audio/ending.mp3',
  'assets/audio/flap.mp3',
  'assets/audio/game-over.mp3',
  'assets/audio/music.mp3',
  'assets/audio/pling.mp3',

  'src/audio.js',
  'src/background.js',
  'src/bird.js',
  'src/canvas.js',
  'src/config.js',
  'src/controls.js',
  'src/explosion.js',
  'src/flower.js',
  'src/flowers.js',
  'src/geometry.js',
  'src/geometry.test.js',
  'src/graphics.js',
  'src/ground.js',
  'src/images.js',
  'src/loop.js',
  'src/nest.js',
  'src/state-machine.js',
  'src/states/collision.js',
  'src/states/finish-collision.js',
  'src/states/finish.js',
  'src/states/finish-retry.js',
  'src/states/init.js',
  'src/states/play.js',
  'src/states/retry.js',
  'src/states/state.js',
  'src/states/title.js',
  'src/states/win.js',
  'src/tower.js',
  'src/towers.js',
  'src/utils.js',

  'index.js',
  '.',
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(resourcesToCache))
  )
})

self.addEventListener('activate', async event => {
  event.waitUntil(
    caches.keys()
      .then(keyList => {
        return Promise.all(keyList.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key)
          }
        }))
      })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request.clone()))
  )
})
