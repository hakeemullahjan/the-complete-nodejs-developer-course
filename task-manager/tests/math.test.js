const { calculateTip } = require("../src/math.js")

test('should calculate total with tip', () => {
    const total = calculateTip(10, .3)

    expect(total).toBe(13)

    // if (total !== 13) {
    //     throw new Error("Should be equal to 13, Got " + total)
    // }
})

test('should calculate tip with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

