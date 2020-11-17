console.log("Client side javascript file is Loaded!")


const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const loc = document.querySelector(".location")
const forecast = document.querySelector('.forecast')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    loc.textContent = "Loading..."
    forecast.textContent = ""

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error)
                loc.textContent = data.error
                forecast.textContent = ""
            } else {
                loc.textContent = data.location
                forecast.textContent = data.forecast
                // console.log(data.location)
                // console.log(data.forecast)
            }
        })
    })
})
