const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = "altea"

geocode(address, (error, data) => {
    if (error) {
        console.log("Error: ", error)
        console.log("Data: ",data)
    } else {
        console.log("Error: ", error)
        console.log("Data: ",data)

        forecast( data.latitude, data.longitude, (error, data) => {
            console.log("Error: ", error)
            console.log("Data: ", data)
        })

    }
});

/*
const lat = 38.6;
const lon = -0.04889;

forecast( lat, lon, (error, data) => {
    console.log("Error: ", error)
    console.log("Data: ", data)
})
*/