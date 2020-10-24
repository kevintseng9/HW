basic.clearScreen()
for (let X = 0; X <= 4; X++) {
    for (let Y = 0; Y <= 4; Y++) {
        if (X % 2 == 0) {
            led.plot(4 - Y, 4 - X)
            basic.pause(500)
        } else {
            led.plot(Y, 4 - X)
            basic.pause(500)
        }
    }
}
