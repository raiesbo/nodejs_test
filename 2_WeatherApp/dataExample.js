const body = {
    request: {
        type: "City",
        query: "altea",
        language: "en",
        unit: "m"
    },
    location: {
        name: "Altea",
        country: "Spain",
        region: "Comunidad Valenciana",
        lat: "38.600",
        lon: "-0.050",
        timezone_id: "Europe/Madrid",
        localtime: "2020-11-11 22:29",
        localtime_epoch: 1605133740,
        utc_offset: "1.0"
    },
    current: {
        observation_time: "09:29 PM",
        temperature: 15,
        weather_code: 113,
        weather_icons: [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
        ],
        weather_descriptions: [
        "Clear"
        ],
        wind_speed: 7,
        wind_degree: 330,
        wind_dir: "NNW",
        pressure: 1024,
        precip: 0,
        humidity: 88,
        cloudcover: 0,
        feelslike: 16,
        uv_index: 1,
        visibility: 10,
        is_day: "no"
    }
}

module.exports = {
    body: body   
}