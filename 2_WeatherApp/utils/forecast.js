const request = require('postman-request');
const keys = require("../../data");


const forecast = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${keys.key}&query=${lat},${lon}`
    request({ url: url, json: true } , (error, response, body) => {
        if(error){
            callback("Not posstible to access the API.", undefined)
        } else if(body.error) {
            callback("Location not found.", undefined)
        } else {
            callback(undefined, {
                forecast: `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}° out but it feels like ${body.current.feelslike}°.`
            })
        }
    })
}


module.exports = forecast;