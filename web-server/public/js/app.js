console.log("Client side javascript file is loaded!")

// fetch('http://puzzle.mead.io/puzzle').then(r => {
//     r.json().then(d => {
//         console.log(d)
//     })
// })

// fetch(`http://localhost:3000/weather?address=boston`).then(r => {
//     r.json().then(data => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// }).catch(e => {
//     console.log(e)
// })

const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const location = search.value
    fetch(`http://localhost:3000/weather?address=${location}`)
        .then(r => {
            r.json().then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    console.log(data.location)
                    console.log(data.forecast)
                }
            })
        })
})
