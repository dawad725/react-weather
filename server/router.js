require('dotenv').config({ path: __dirname + '/.env.production' || __dirname + '/.env.development' });
const router = require('express').Router();
const axios = require('axios');

let city;

router.post('/api/search-city', (req, res, next) => {

    city = req.body.city

    console.log(city)
    res.end(city)
})



router.get('/api/search-city-weather', (req, res) => {

    const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=`;
    const apiKey = `&appid=${process.env.REACT_APP_WEATHER_API_KEY}&`
    const units = `units=imperial`

    const searchedCity = (baseURL, apiKey, units) => {

        let newUrl = baseURL + city + apiKey + units;
        return newUrl
    }

    const apiUrl = searchedCity(baseURL, apiKey, units);


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