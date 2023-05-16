input.onPinPressed(TouchPin.P0, function () {
    if (4 == 4) {
        basic.showArrow(ArrowNames.South)
    }
})
input.onButtonPressed(Button.A, function () {
    if (2 == 2) {
        basic.showArrow(ArrowNames.West)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (6 == 6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (3 == 3) {
        basic.showArrow(ArrowNames.East)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (5 == 5) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
