import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Paper, Typography, Button } from '@material-ui/core';
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: "center",
        paddingTop: "20%",
    },
    title: {
        textAlign: "center",
        margin: "0",
        padding: "1em",
        fontSize: "40px",
        color: "white",
        [theme.breakpoints.only("xs")]: {
            fontSize: "25px"
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxWidth: 500,
        margin: "auto",
        fontSize: "30px",
        backgroundColor: "white",
        [theme.breakpoints.only("xs")]: {
            maxWidth: 300,
            fontSize: "15px"
        }
    },
    icons: {
        textAlign: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: '100%',
        maxHeight: '100%',
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
        paddingTop: "20px"
    },
    button: {

    }
}));


export default function Today() {
    const classes = useStyles();
    const [weatherData, setWeatherData] = useState({});
    let history = useHistory();

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchWeather = await axios.get('/api/search-city-weather');

                setWeatherData(fetchWeather.data)

            } catch (e) {

                console.log('we have an error: ', e)
            }
        }

        fetchData();

    }, []);

    const getFiveDayForecast = (e) => {
        e.preventDefault();

        const url = "/api/get-the-five-day"

        history.push('./weekly-forecast')
    }


    console.log("data", weatherData)


    return (
        <>
            <Navbar />
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
                        <Typography className={classes.text}>High of {weatherData.tempHigh}F today</Typography>
                    </Grid>
                </Paper>
                <Grid item s={12} className={classes.container}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={getFiveDayForecast}
                        className={classes.button}
                    >
                        Next 5 days
                </Button>
                </Grid>
            </div>
        </>
    );

}









