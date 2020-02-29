const request = require("request")

// const url = 'https://api.darksky.net/forecast/4a7b9acbff1ca79ad039b3b85d79c4e8/37.8267,-122.4233'
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Cant connect to weather services")
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log('It is currently', response.body.daily.data[0].summary, 'There is', response.body.currently.precipIntensity, '% chances of rain')
//     }
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/4a7b9acbff1ca79ad039b3b85d79c4e8/${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Cant connect to weather services', undefined)
        } else if (body.error) {
            callback("Unable to find location")
        } else {
            callback(undefined, `It is currently ${body.daily.data[0].summary}. ${body.currently.temperature} degree,  There is ${body.currently.precipIntensity}% chances of rain`)
        }
    })
}

module.exports = forecast