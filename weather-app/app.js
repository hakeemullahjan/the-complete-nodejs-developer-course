const request = require("request")
const geocode = require("./utils/geocode")

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

// const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFrZWVtdWxsYWhqYW4iLCJhIjoiY2s2bDRjbXU4MGFlazNkcDZ6bTNnZXZiZiJ9.v_IhhjsLHq_CSFd8qDe52A&limit=1'
// request({ url: URL, json: true }, (error, response) => {
//     if (error) {
//         console.log("Cannot find geo location")
//     } else if (response.body.features.length === 0) {
//         console.log("Invalid api Location")
//     }
//     else {
//         console.log('lat', response.body.features[0].center[0], 'lan', response.body.features[0].center[1])
//     }
// })

geocode("karachi", (error, data) => {
    console.log("Error", error)
    console.log("Data", data)
})