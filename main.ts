let Light = 0
let Alert = 0
input.onButtonPressed(Button.A, function () {
    if (Light == 1) {
        Light = 0
        basic.showString("OFF")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Light == 0) {
        Light = 1
        basic.showString("ON")
    }
})
basic.forever(function () {
    if (Light == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        Alert = 0
    }
    if (Light == 1) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            # # . . .
            # . . . .
            `)
        basic.pause(5000000)
        Alert = 1
    }
})
basic.forever(function () {
    while (Alert == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
    }
})
