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

