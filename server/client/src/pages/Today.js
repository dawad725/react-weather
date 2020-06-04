import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import { sizeHeight } from '@material-ui/system';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        textAlign: "center",
        margin: "0",
        padding: "1em",
        fontSize: "75px",
        color: "white"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxWidth: 500,
        margin: "auto",
        fontSize: "30px"
    },
    icons: {
        textAlign: 'center',
        // sizeHeight: "100px"
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
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box className={classes.paper}>
                        Today's temperature is {weatherData.tempNow} F
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <img className={classes.icons} src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );

}









