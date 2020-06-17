import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Paper, Typography, Button } from '@material-ui/core';
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import ErrorMessage from './ErrorMessage'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: "center",
        paddingTop: "15%",
    },
    title: {
        textAlign: "center",
        margin: "0",
        fontSize: "40px",
        paddingBottom: "40px",
        color: "white",
        [theme.breakpoints.only("xs")]: {
            fontSize: "20px"
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxWidth: 400,
        margin: "auto",
        fontSize: "30px",
        backgroundColor: "white",
        [theme.breakpoints.only("xs")]: {
            maxWidth: 300,
            fontSize: "15px"
        }
    },
    image: {
        textAlign: "center",
        justifyItems: "center"
    },
    text: {
        textAlign: "center",
        fontFamily: "Helvetica",
        fontSize: "40px",
        [theme.breakpoints.only("xs")]: {
            fontSize: "20px"
        }
    },
    container: {
        textAlign: "center",
        paddingTop: "15px"
    },
    button: {
        backgroundColor: "#5588a3"
    },
    buttonContainer: {
        paddingTop: "5%",
        [theme.breakpoints.only("xs")]: {
            paddingTop: "15%",
        }
    }
}));


export default function Today() {
    const classes = useStyles();
    const [weatherData, setWeatherData] = useState({});
    let history = useHistory();

    useEffect(() => {
        async function fetchData() {
            try {
                // const fetchWeather = await axios.get('/api/search-city-weather');
                const fetchWeather = await axios.get('/api/test');
                console.log("hello", fetchWeather)

                setWeatherData(fetchWeather.data)

            } catch (e) {

                console.log('we have an error: ', e)
            }
        }

        fetchData();

    }, []);

    // This function handles the button click on this page 
    const getFiveDayForecast = (e) => {
        e.preventDefault();

        const url = "/api/get-the-five-day"

        // When the button is clicked, we use axios to hit our back-end endpoint
        axios
            .get(url)
        // After that we send the user to the "week" page to see the data from the endpoint
        history.push('./weekly-forecast')
    }


    console.log("data", weatherData)
    return (
        <>
            <Navbar />
            {weatherData.name === "Error" ? <ErrorMessage /> :
                <div className={classes.root}>
                    <Grid item s={12} className={classes.container}>
                        <Box className={classes.title}>
                            Today's temperature in {weatherData.city} is {weatherData.tempNow}F
                    </Box>
                    </Grid>
                    <Paper className={classes.paper}>
                        <Grid item s={12} className={classes.container}>
                            <img className={classes.image} src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="weather-icon" />
                            <Typography className={classes.text}>{weatherData.condition}</Typography>
                            <Typography className={classes.text}>High of {weatherData.tempHigh}F</Typography>
                            <Typography className={classes.text}>Low of {weatherData.tempLow}F</Typography>
                        </Grid>
                    </Paper>
                    <Grid item s={12} className={classes.container}>
                        <div className={classes.buttonContainer}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={getFiveDayForecast}
                                className={classes.button}
                            >
                                Get the 5 day forecast
                            </Button>
                        </div>
                    </Grid>
                </div>}

        </>

    );

}









