import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Grid, Box, Paper, Typography, Button } from '@material-ui/core';
import Navbar from '../components/Navbar'
// import axios from 'axios'
// import { useHistory } from 'react-router-dom';


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
        textAlign: "center"
    }
}));


export default function Week() {
    const classes = useStyles();


    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const fetchWeather = await axios.get('/api/search-city-weather');

    //             setWeatherData(fetchWeather.data)

    //         } catch (e) {

    //             console.log('we have an error: ', e)
    //         }
    //     }

    //     fetchData();

    // }, []);




    return (
        <>
            <Navbar />
            <div className={classes.root}>

            </div>
        </>
    );

}









