// 3D scroll

let zSpasing = -1000,
  lastPos = zSpasing / 5,
  $frames = document.getElementsByClassName('frame')
frames = Array.from($frames)
zVals = []

window.onscroll = function () {
  let top = document.documentElement.scrollTop,
    delta = lastPos - top

  lastPos = top

  frames.forEach(function (n, i) {
    zVals.push(i * zSpasing + zSpasing)
    zVals[i] += delta * -5
    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`
    opacity = zVals[i] < Math.abs(zSpasing) / 1.8 ? 1 : 0
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
  })
}

window.scrollTo(0, 1)

// Audio

let sound = document.querySelector('.sound'),
  audio = document.querySelector('.audio')

sound.addEventListener('click', (e) => {
  sound.classList.toggle('paused')
  audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function () {
  sound.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function () {
  audio.pause()
}

function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}
