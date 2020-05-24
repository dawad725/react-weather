import React from 'react';
import Form from "../Components/Form"
import { makeStyles } from '@material-ui/core';

import backgroundImage from "../images/blue_sky.jpg"


const useStyles = makeStyles(theme => ({
    title: {
        textAlign: "center",
        margin: "0",
        padding: "1em"
    },
    backgroundWrapper: {
        background: `url(${backgroundImage}) no-repeat center center`,
        backgroundSize: "cover",
        marginBottom: "0"
    }
}))


function Home() {
    const classes = useStyles();

    return (

        <div className={classes.backgroundWrapper}>
            <h1 className={classes.title}>
                Dave's Weather Station
                </h1>
            <Form />
        </div>

    )
}

export default Home;