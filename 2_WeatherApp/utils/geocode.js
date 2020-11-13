const request = require('postman-request');
const keys = require("../../data");


const geocode = (address, callback) => {
    const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${keys.your_access_token}&limit=1`
    request({ url: geoUrl, json: true }, (error, response, body) => {
        if (error) {
            callback("Access to API not available.", undefined)
        } else if (!body.features[0]) {
            callback("Location not found.", undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
};


module.exports = geocode;