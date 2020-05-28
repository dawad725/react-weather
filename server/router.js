require('dotenv').config()

const router = require('express').Router();
const axios = require('axios')

let city;

router.post('/search-city', (req, res, next) => {

    city = req.body.city;

    console.log(city)
    res.end()
})



router.get('/search-city-weather', (req, res) => {

    const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=`;
    const apiKey = `&appid=${process.env.REACT_APP_WEATHER_API_KEY}&`
    const units = `units=imperial`
    console.log("key", process.env.REACT_APP_WEATHER_API_KEY)
    const searchedCity = (baseURL, apiKey, units) => {

        let newUrl = baseURL + "buffalo" + apiKey + units;
        return newUrl
    }

    const apiUrl = searchedCity(baseURL, apiKey, units);
    console.log("URL STRING ", apiUrl)


    let data;

    async function getTodaysWeather() {

        try {
            let res = await axios.get(apiUrl);

            let data = res.data

            console.log("data", data)

            data = data
        } catch (e) {
            console.log("We have an error", e)
        }

    }

    getTodaysWeather()

    res.send({ data })
})

module.exports = router