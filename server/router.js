require('dotenv').config({ path: __dirname + '/.env.production' || __dirname + '/.env.development' });
const router = require('express').Router();
const axios = require('axios');

// Initializing this variable globally so it can be used in our get route 
let city;

router
    .post('/api/search-city', (req, res, next) => {


        city = req.body.city

        console.log(city)
        res.end(city)
    })



router
    .get('/api/search-city-weather', (req, res) => {

        const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=`;
        const apiKey = `&appid=${process.env.REACT_APP_WEATHER_API_KEY}&`
        const units = `units=imperial`

        //This function creates the url we need for our API call below 
        const searchedCity = (baseURL, apiKey, units) => {

            let newUrl = baseURL + city + apiKey + units;
            return newUrl
        }
        //Our api with user inputed city 
        const apiUrl = searchedCity(baseURL, apiKey, units);


        const getWeatherData = async () => {
            try {

                let res = await axios.get(apiUrl)
                let data = res.data
                console.log(" datalist", data)

                let responseData = {
                    "city": data.name,
                    "icon": data.weather[0].icon,
                    "tempNow": data.main.temp.toPrecision(2) + "°",
                    "tempHigh": data.main.temp_max.toPrecision(2) + "°",
                    "tempLow": data.main.temp_min.toPrecision(2) + "°",
                    "humidity": data.main.humidity,
                    "condition": data.weather[0].description
                }

                console.log(responseData)
                return responseData

            } catch (e) {

                return e
            }
        }

        getWeatherData().then(responseData => {
            res.send(responseData)
        })

    })

module.exports = router