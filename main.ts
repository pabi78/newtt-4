input.onSound(DetectedSound.Loud, function () {
    strip = neopixel.create(DigitalPin.P13, 45, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
    strip.setBrightness(255)
    strip.show()
    basic.pause(500)
    for (let index = 0; index <= 45; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip.setBrightness(255)
        strip.show()
        basic.pause(11)
    }
    for (let index = 0; index <= 45; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Violet))
        strip.setBrightness(255)
        strip.show()
        basic.pause(11)
    }
    for (let index = 0; index <= 45; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        strip.setBrightness(255)
        strip.show()
        basic.pause(11)
    }
})
input.onSound(DetectedSound.Quiet, function () {
    strip = neopixel.create(DigitalPin.P13, 45, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip.setBrightness(255)
    strip.show()
    basic.pause(100)
})
let ttt = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 45, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
strip.setBrightness(255)
basic.forever(function () {
    serial.writeNumber(pins.analogReadPin(AnalogPin.P4))
    serial.writeLine("")
    if (pins.analogReadPin(AnalogPin.P3) >= 1000) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        strip.setBrightness(255)
        strip.show()
        basic.pause(100)
    } else {
        if (pins.analogReadPin(AnalogPin.P4) > 1000) {
            for (let index = 0; index <= 5; index++) {
                ttt = 5 - index
                strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
                strip.setBrightness(ttt * 55)
                strip.show()
                basic.pause(100)
            }
        }
    }
})
