const images = {
  basePath: 'assets/images',

  list: [
    { name: 'background', fileName: 'background.png' },
    { name: 'ground', fileName: 'ground.png' },
    { name: 'flower1', fileName: 'flower1.png' },
    { name: 'flower2', fileName: 'flower2.png' },
    { name: 'bird', fileName: 'bird.png' },
    { name: 'tower', fileName: 'tower.png' },
    { name: 'wingUp', fileName: 'wing-up.png' },
    { name: 'wingDown', fileName: 'wing-down.png' },
    { name: 'pow1', fileName: 'pow1.png' },
    { name: 'pow2', fileName: 'pow2.png' },
    { name: 'pow3', fileName: 'pow3.png' }
  ],

  load: async () => {
    return Promise.all(images.list.map(img =>
      new Promise((resolve, reject) => {
        images[img.name] = document.createElement('img')
        images[img.name].onload = resolve
        images[img.name].onerror = reject
        images[img.name].fileName = img.fileName
        images[img.name].src = `${images.basePath}/${img.fileName}`
      })
    ))
  }
}
