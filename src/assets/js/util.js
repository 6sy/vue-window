//进入全屏
// eslint-disable-next-line
export function requestFullScreen () {
  var de = document.documentElement
  console.log(de)
  if (de.requestFullscreen) {
    de.requestFullscreen()
  } else if (de.mozRequestFullScreen) {
    de.mozRequestFullScreen()
  } else if (de.webkitRequestFullScreen) {
    de.webkitRequestFullScreen()
  }
}
//退出全屏
// eslint-disable-next-line
export function exitFullscreen () {
  var de = document
  if (de.exitFullscreen) {
    de.exitFullscreen()
  } else if (de.mozCancelFullScreen) {
    de.mozCancelFullScreen()
  } else if (de.webkitCancelFullScreen) {
    de.webkitCancelFullScreen()
  }
}