let Fahrenheit = 0
let Celsius = 0
input.onButtonPressed(Button.A, function () {
    if (Fahrenheit >= 14 && Fahrenheit <= -22) {
        basic.showString("Stay at home, there is heavy snow.")
        basic.showIcon(IconNames.No)
    } else if (Fahrenheit >= 15 && Fahrenheit <= 23) {
        basic.showString("Go for your skis and have fun!")
        basic.showIcon(IconNames.Yes)
    } else if (Fahrenheit >= 24 && Fahrenheit <= 32) {
        basic.showString("Warning! You can only ski in the highest parts.")
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (Fahrenheit >= 33) {
        basic.showString("Sorry, it is not ski season.")
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    Celsius = input.temperature()
    Fahrenheit = Celsius * 1.8 + 32
    basic.showNumber(Fahrenheit)
})
