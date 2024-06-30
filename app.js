document.querySelectorAll('p')
    .forEach(p =>
        p.onclick = () =>
            p.style.color = randomColor()
    )

function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`
}

const clientId = '17e75ea0bd3b4c5ba42390857ac12dd4'
const clientSecret = localStorage.getItem('client_secret')
console.log({ clientId, clientSecret })














































































    ;
(() => {
    if (document.querySelector('canvas') !== undefined || Math.random() > .1) return
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    canvas.width = 250
    canvas.height = 250

    let x = canvas.width / 2
    let y = canvas.height / 2
    let sx = (Math.random() * 10 + 5) * (Math.round(Math.random()) * 2 - 1)
    let sy = 2
    const r = 25
    const colorOffset = Math.random()

    setInterval(() => {
        ctx.fillStyle = '#000 '
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        x += sx
        y += sy

        sy += 1

        if (x - r < 0) {
            x = r
            sx = Math.abs(sx)
        }
        else if (x + r > canvas.width) {
            x = canvas.width - r
            sx = -Math.abs(sx)
        }

        if (y - r < 0) {
            y = r
            sy = Math.abs(sy) * .9
        }
        else if (y + r > canvas.height) {
            y = canvas.height - r
            sy = -Math.abs(sy)
        }

        ctx.fillStyle = `hsl(${(Date.now() / 30_000 + colorOffset) % 1 * 360},100%,50%)`
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fill()

    }, 1000 / 30)
})()