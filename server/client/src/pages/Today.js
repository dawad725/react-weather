import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: "center",
        margin: "0",
        padding: "1em",
        fontSize: "75px",
        color: "white"
    }
}));


export default function Today() {
    const classes = useStyles();
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchWeather = await axios.get('/api/search-city-weather');

                setWeatherData(fetchWeather.data)
            } catch (e) {
                console.log('our error is: ', e)
            }
        }

        fetchData();

    }, []);

    console.log("data", weatherData)

    return (
        <>
            <div className={classes.title}>
                <p>Today's weather is... </p>
            </div>
            <div>
                {weatherData.tempNow}
            </div>
        </>
    );

}









