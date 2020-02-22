// setTimeout(() => {
//     console.log("Two seconds..")
// }, 2000)

// const names = ['ali', 'jaafar', 'kazim', 'raza']
// const shortName = names.filter((name) => {
//     return name.length <= 4
// })
// // console.log("Short Names", shortName)

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Pakistan', (data) => {
//     console.log(data)
// })


const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}
add(2, 3, (sum) => {
    console.log(sum)
})