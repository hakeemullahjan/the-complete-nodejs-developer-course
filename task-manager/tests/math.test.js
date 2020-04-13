const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require("../src/math.js")

// test('should calculate total with tip', () => {
//     const total = calculateTip(10, .3)
//     expect(total).toBe(13)
//     // if (total !== 13) {
//     //     throw new Error("Should be equal to 13, Got " + total)
//     // }
// })

// test('should calculate tip with default tip', () => {
//     const total = calculateTip(10)
//     expect(total).toBe(12.5)
// })

test('Should convert 32 F to 0 C', () => {
    // fahrenheitToCelsius
    const convert = fahrenheitToCelsius(32)
    expect(convert).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
    //celsiusToFahrenheit
    const convert = celsiusToFahrenheit(0)
    expect(convert).toBe(32)
})




