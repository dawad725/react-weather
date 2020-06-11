import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Box, Paper, Typography, Button } from '@material-ui/core';
import Navbar from '../components/Navbar'
import axios from 'axios'
// import { useHistory } from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
    root: {
        // flexGrow: 1,
        // textAlign: "center",
        // paddingTop: "20%",
        // minWidth: "275px",
        maxWidth: "275px"

    },
    card: {
        paddingTop: "20%",
    },
    title: {
        // textAlign: "center",
        // margin: "0",
        // padding: "1em",
        fontSize: "14px",
        // color: "white",
        // [theme.breakpoints.only("xs")]: {
        //     fontSize: 10
        // }
    },
    // paper: {
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //     maxWidth: 500,
    //     margin: "auto",
    //     fontSize: "30px",
    //     backgroundColor: "white",
    //     [theme.breakpoints.only("xs")]: {
    //         maxWidth: 300,
    //         fontSize: "15px"
    //     }
    // },
    // icons: {
    //     textAlign: "center",
    //     display: "block",
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //     maxWidth: '100%',
    //     maxHeight: '100%',
    // },

    // image: {
    //     textAlign: "center",
    //     justifyItems: "center"
    // },
    // text: {
    //     textAlign: "center",
    //     fontFamily: "Helvetica",
    //     fontSize: "40px",
    //     [theme.breakpoints.only("xs")]: {
    //         fontSize: "20px"
    //     }
    // },
    // container: {
    //     textAlign: "center"
    // },
    pos: {
        marginBottom: 12,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    cards: {
        paddingLeft: "50px"
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

    // <Grid item key={card} xs={12} sm={6} md={4}>
    //     <Card className={classes.root} justify="center">
    //         <CardContent>
    //             <Typography>
    //                 {card.temp}
    //             </Typography>
    //         </CardContent>
    //     </Card>
    // </Grid>


    // if (!weatherData.length) return (<p>Loading...</p>);

    const weatherCard =

        !weatherData.length ? (<p>Loading...</p>) :

            weatherData.map((card, index) => {

                console.log(card, "cards")
                return (
                    <div className={classes.cards} key={index}>{card.temp}</div>
                )
            })

    return (

        <>
            <Navbar />

            <div className={classes.card}>
                {/* <Grid container spacing={4}> */}
                {weatherCard}
                {/* </Grid> */}
            </div>
        </>
    );

}









