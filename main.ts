input.onButtonPressed(Button.A, function () {
    radio.sendString("pozik")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("bihotza")
})
radio.onReceivedString(function (receivedString) {
    if ("pozik" == receivedString) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.clearScreen()
    }
    if ("triste" == receivedString) {
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.clearScreen()
    }
    if ("bihotza" == receivedString) {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("triste")
})
radio.setGroup(69)
