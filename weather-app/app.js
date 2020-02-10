const request = require("request")

const url = 'https://api.darksky.net/forecast/4a7b9acbff1ca79ad039b3b85d79c4e8/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})