// 滚动条动画
export const scrollAnimation = (id, offset = 0) => {
  let timer
  clearInterval(timer)
  const a = document.getElementById(id).offsetTop - offset
  let b = this.boxScroll
  const sy = a - b < 0
  const s = 20
  const t = 300
  const x = Math.abs(t / ((a - b) / s))
  timer = setInterval(() => {
    if (sy) {
      b -= s
      document.documentElement.scrollTop = b
      document.body.scrollTop = b
      if (a > b) {
        document.documentElement.scrollTop = a
        document.body.scrollTop = a
        clearInterval(timer)
      }
    } else {
      b += s
      document.documentElement.scrollTop = b
      document.body.scrollTop = b
      if (a < b) {
        document.documentElement.scrollTop = a
        document.body.scrollTop = a
        clearInterval(timer)
      }
    }
  }, x)
}
