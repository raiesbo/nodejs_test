const request = require('postman-request');
const keys = require("../../data");


const forecast = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${keys.key}&query=${lat},${lon}`
    request({ url, json: true } , (error, { body }) => {
        if(error){
            callback("Not posstible to access the API.", undefined)
        } else if(body.error) {
            callback("Location not found.", undefined)
        } else {
            //console.log("response: ", response)
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}° out but it feels like ${body.current.feelslike}°.`
            )
        }
    })
}


module.exports = forecast;