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
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")

messageOne.textContent = ''
messageTwo.textContent = ''

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    messageOne.textContent = '...loading'
    messageTwo.textContent = ''

    const location = search.value
    fetch(`/weather?address=${location}`)
        .then(r => {
            r.json().then(data => {
                if (data.error) {
                    console.log(data.error)
                    messageTwo.textContent = data.error
                } else {
                    console.log(data.location)
                    console.log(data.forecast)
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.forecast
                }
            })
        })
})
