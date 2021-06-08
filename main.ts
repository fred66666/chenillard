let delais = 30
let abs = 0
let ordo = 0
for (let ordo = 0; ordo <= 4; ordo++) {
    for (let abs = 0; abs <= 4; abs++) {
        led.plot(abs, ordo)
        basic.pause(delais)
        led.unplot(abs, ordo)
    }
}
basic.forever(function () {
	
})
