// Animated favicon: a shield that continuously spins around its vertical axis.
// Browsers only render the first frame of an animated SVG favicon, so we draw
// each frame onto a canvas and swap the <link rel="icon"> href. This animates
// in Chrome, Edge, Firefox and Safari alike.
export default defineNuxtPlugin(() => {
  const SIZE = 64
  const canvas = document.createElement('canvas')
  canvas.width = SIZE
  canvas.height = SIZE
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Ensure a dedicated <link rel="icon"> we control.
  let link = document.querySelector<HTMLLinkElement>('link#animated-favicon')
  if (!link) {
    link = document.createElement('link')
    link.id = 'animated-favicon'
    link.rel = 'icon'
    link.type = 'image/png'
    document.head.appendChild(link)
  }

  const TEAL = '#1f6f68'
  const TEAL_DARK = '#155049'
  const GOLD = '#bd7a1c'
  const PAPER = '#f3ede1'

  // Shield outline + checkmark, sized for the 64x64 canvas.
  const shield = new Path2D(
    'M32 3 L57 13 L57 32 C57 49 45 59 32 63 C19 59 7 49 7 32 L7 13 Z'
  )
  const check = new Path2D('M22 32 L29 40 L43 23')

  function drawFace(squash: number, backlit: boolean) {
    const grad = ctx.createLinearGradient(0, 3, 0, 63)
    if (backlit) {
      // Back of the shield as it flips: darker, no checkmark.
      grad.addColorStop(0, TEAL_DARK)
      grad.addColorStop(1, '#0e3833')
    } else {
      grad.addColorStop(0, TEAL)
      grad.addColorStop(1, TEAL_DARK)
    }

    ctx.save()
    // Flip around the vertical center to fake a 3D Y-axis rotation.
    ctx.translate(SIZE / 2, 0)
    ctx.scale(squash, 1)
    ctx.translate(-SIZE / 2, 0)

    ctx.fillStyle = grad
    ctx.fill(shield)
    ctx.lineJoin = 'round'
    ctx.lineWidth = 2.5
    ctx.strokeStyle = GOLD
    ctx.stroke(shield)

    if (!backlit) {
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.lineWidth = 5
      ctx.strokeStyle = PAPER
      ctx.stroke(check)
    }
    ctx.restore()
  }

  const PERIOD = 2600 // ms per full spin
  let raf = 0
  let start = 0

  function frame(now: number) {
    if (!start) start = now
    const t = ((now - start) % PERIOD) / PERIOD // 0..1
    const angle = t * Math.PI * 2
    const squash = Math.cos(angle) // 1 -> 0 -> -1 -> 0 -> 1
    // When cos < 0 we're seeing the back of the shield.
    const backlit = squash < 0

    ctx.clearRect(0, 0, SIZE, SIZE)
    // |squash| collapses the shield toward an edge; floor it so it never vanishes.
    drawFace(Math.max(Math.abs(squash), 0.04) * Math.sign(squash || 1), backlit)

    link!.href = canvas.toDataURL('image/png')
    raf = requestAnimationFrame(frame)
  }

  // Pause when the tab is hidden to save work; resume on return.
  function onVisibility() {
    if (document.hidden) {
      cancelAnimationFrame(raf)
      raf = 0
    } else if (!raf) {
      start = 0
      raf = requestAnimationFrame(frame)
    }
  }
  document.addEventListener('visibilitychange', onVisibility)

  raf = requestAnimationFrame(frame)
})
