const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([2, 4, 1])
        reject("Something went wrong")
    }, 2000);
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})