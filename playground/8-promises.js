// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([2, 4, 1])
//         reject("Something went wrong")
//     }, 2000);
// })

// doWorkPromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(3, 6).then((sum) => {
//     console.log(sum)

//     add(sum, 9).then(sum2 => {
//         console.log(sum2)
//     }).catch(e => {
//         console.log(e)
//     })
// }).catch(err => {
//     console.log(err)
// })

add(1, 1).then(sum => {
    console.log(sum)
    return add(sum, 2)
}).then(sum2 => {
    console.log(sum2)
}).catch(e => {
    console.log(e)
})