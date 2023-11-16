let alien
let timer
let clicker
let anim

window.addEventListener("load", () => {

    timer = document.querySelector("#input-timer")
    clicker = document.querySelector("#input-score")
    alien = new Alien("#alien")
    tick()
})

const tick = () => {
    alien.tick()
    anim = window.requestAnimationFrame(tick)
}

let time = 10
countdown = setInterval(() => {
    timer.value = --time
    if(time == 0){
        clearInterval(countdown)
        window.cancelAnimationFrame(anim)
    }
}, 1000)


