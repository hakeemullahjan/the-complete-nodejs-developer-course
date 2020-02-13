const request = require("request")

const url = 'https://api.darksky.net/forecast/4a7b9acbff1ca79ad039b3b85d79c4e8/37.8267,-122.4233?lang=es'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.currently)
    //console.log('It is currently', response.body.daily.data[0].summary, 'There is', response.body.currently.precipIntensity, '% chances of rain')
})

const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFrZWVtdWxsYWhqYW4iLCJhIjoiY2s2bDRjbXU4MGFlazNkcDZ6bTNnZXZiZiJ9.v_IhhjsLHq_CSFd8qDe52A&limit=1'

request({ url: URL, json: true }, (error, response) => {
    console.log('lat', response.body.features[0].center[0], 'lan', response.body.features[0].center[1])
})