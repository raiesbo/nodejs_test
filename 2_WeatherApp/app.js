const request = require('postman-request');
const keys = require("../data");

const endpoint = "warsaw"
const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${endpoint}.json?access_token=${keys.your_access_token}&limit=1`


request({url: geoUrl, json: true}, (error, response, body) => {
    if(error){
        //console.log("geoDataError: ", error)
        console.log("Access to API not available.")
    }else if(!body.features[0]) {
        console.log("Location not found.")
    } else {
        console.log("geoStatusCode: ", response.statusCode)
        console.log(body.features[0].place_name)
        const latitude = body.features[0].center[1]
        const longitude = body.features[0].center[0]
        console.log("lat:", latitude, " lon: ",longitude)
    }
    
})
/*

const city = "warsaw"
const url = `http://api.weatherstack.com/current?access_key=${keys.key}&query=${city}`


request({ url: url, json: true } , (error, response, body) => {
    if(error){
        console.log("Not possible to acces the API")
    } else if(body.error) {
        console.log("Location not found")
    } else {
        console.log("error: ", error);
        console.log("statusCode: ", response && response.statusCode);
        console.log(`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}° out but it feels like ${body.current.feelslike}°.`)
    }
    
})
*/


