input.onButtonPressed(Button.A, function () {
    if (Is1On == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        Is1On = 1
        basic.showIcon(IconNames.Heart)
    }
    if (Is2On == 0) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    Is2On = 0
})
input.onButtonPressed(Button.B, function () {
    if (Is1On == 1) {
        basic.clearScreen()
        Is1On = 0
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (Is2On == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    Is2On = 1
})
let Is2On = 0
let Is1On = 0
Is1On = 0
Is2On = 1
basic.forever(function () {
    if (Is1On == 1) {
        led.setBrightness(4)
        basic.pause(300)
        led.setBrightness(134)
        basic.pause(100)
        led.setBrightness(208)
        basic.pause(100)
        led.setBrightness(255)
        basic.pause(100)
        led.setBrightness(136)
        basic.pause(100)
        led.setBrightness(204)
        basic.pause(100)
        led.setBrightness(255)
    }
})
