// require('dotenv').config({ path: __dirname + '/.env.production' || __dirname + '/.env.development' });
const router = require('express').Router();
const axios = require('axios');
const moment = require('moment');

// Initializing this variable globally so it can be used in our get routes
let city;
const apiKey = `&appid=${process.env.REACT_APP_WEATHER_API_KEY}&`
const units = `units=imperial`

router
    .post('/api/search-city', (req, res, next) => {


        city = req.body.city

        // console.log(city)
        res.end(city)
    })



router
    .get('/api/search-city-weather', (req, res) => {

        const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=`;

        //This function creates the url we need for our API call below 
        const searchedCity = (baseURL, apiKey, units) => {

            let newUrl = baseURL + city + apiKey + units;
            return newUrl
        }
        //Our api with user provided city 
        const apiUrl = searchedCity(baseURL, apiKey, units);


        const getWeatherData = async () => {
            try {

                let res = await axios.get(apiUrl)
                let data = res.data
                // console.log(" datalist", data)

                let responseData = {
                    "city": data.name,
                    "icon": data.weather[0].icon,
                    "tempNow": data.main.temp.toPrecision(2) + "°",
                    "tempHigh": data.main.temp_max.toPrecision(2) + "°",
                    "tempLow": data.main.temp_min.toPrecision(2) + "°",
                    "humidity": data.main.humidity,
                    "condition": data.weather[0].description
                }

                // console.log(responseData)
                return responseData

            } catch (e) {

                return e
            }
        }

        getWeatherData().then(responseData => {
            res.send(responseData)
        })

    })


router
    .get("/api/get-the-five-day", (req, res) => {
        const weekBaseUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";

        const apiWeekUrl = (weekBaseUrl, apiKey, units) => {
            let weekUrl = weekBaseUrl + city + apiKey + units
            return weekUrl
        }
        // Here we are creating the url we will use to run our search 
        // based on the users inputed city the previously used post route
        const forecastUrl = apiWeekUrl(weekBaseUrl, apiKey, units)

        const getOneWeekWeatherData = async () => {
            try {

                let req = await axios.get(forecastUrl)

                let data = req.data

                // We are using this array to store our data we want from the request
                let forecast = [];

                // Here we are looping through the data that we are receiving from the request
                for (let i = 0; i < data.list.length; i++) {
                    // This conditional isolates the same time for each day
                    if (data.list[i].dt_txt.includes("00:00:00")) {
                        let weekDataObj = {
                            "temp": data.list[i].main.temp.toPrecision(2) + "°",
                            "condition": data.list[i].weather[0].description,
                            "icon": data.list[i].weather[0].icon,
                            "day": moment(data.list[i].dt_txt).format('dddd'),
                            "tempHigh": data.list[i].main.temp_max.toPrecision(2) + "°",
                            "tempLow": data.list[i].main.temp_min.toPrecision(2) + "°",
                            "humidity": data.list[i].main.humidity,
                        }
                        // As we loop through we push our data into the "forecast" array
                        // if it satisfies our conditional statement
                        forecast.push(weekDataObj);
                    }

                }


                console.log("data", forecast)

                // Here we are returning our array of data
                return forecast

            } catch (e) {

                return e
            }
        }

        getOneWeekWeatherData().then(forecast => {
            res.send(forecast)
        })
    })

module.exports = router