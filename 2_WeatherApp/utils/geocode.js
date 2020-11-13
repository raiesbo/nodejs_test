const request = require('postman-request');
const keys = require("../../data");


const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${keys.your_access_token}&limit=1`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Access to API not available.", undefined)
        } else if (body.features[0] === undefined) {
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