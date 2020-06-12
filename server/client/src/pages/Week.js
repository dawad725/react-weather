import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography } from '@material-ui/core';
import Navbar from '../components/Navbar'
import axios from 'axios'
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: "14px",
    },
    cards: {
        paddingTop: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.only("xs")]: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
    },
    card: {
        textAlign: "center"
    }
}));


export default function Week() {
    const classes = useStyles();
    const [weatherData, setWeatherData] = useState({});
    const apiUrl = "/api/get-the-five-day"



    useEffect(() => {

        // this function is async and returning data from 
        // the backend based on the users search
        async function fetchFiveDayData() {
            try {
                const fetchWeeklyWeather = await axios.get(apiUrl);


                setWeatherData(fetchWeeklyWeather.data)

            } catch (e) {

                console.log('we have an error: ', e)
            }
        }

        fetchFiveDayData();

    }, []);

    console.log("Boop", weatherData)


    // if (!weatherData.length) return (<p>Loading...</p>);

    const weatherCard = !weatherData.length ? (<h1>Loading...</h1>) :

        weatherData.map((card, index) => {

            console.log(card, "cards")

            return (
                <Grid item
                    key={index}
                    sm={4}
                    md={2}
                    xs={8}
                >
                    <Card>
                        <CardContent className={classes.card}>
                            <Typography>
                                {card.temp}
                            </Typography>
                            <img className={classes.image} src={`http://openweathermap.org/img/wn/${card.icon}@2x.png`} alt="weather-icon" />
                            <Typography>
                                {card.condition}
                            </Typography>
                            <Typography>
                                High of {card.tempHigh}
                            </Typography>
                            <Typography>
                                Low of {card.tempLow}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            );
        });

    return (

        <>
            <Navbar />
            <Grid container className={classes.cards} spacing={2} >
                {weatherCard}
            </Grid>
        </>
    );

}









