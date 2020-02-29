const https = require("https")
const url = `https://api.darksky.net/forecast/4a7b9acbff1ca79ad039b3b85d79c4e8/40,-75`

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', error => {
    console.log('An error', error)
})

request.end()