import React from 'react';
import Form from "../components/Form"
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: "center",
        margin: "0",
        paddingTop: "20%",
        color: "white",
    }
}))


export default function Home() {

    const classes = useStyles();

    return (

        <div>
            <Navbar />
            <Typography
                className={classes.title}
                variant="h3"
            >
                Dave's Weather Station
                </Typography>
            <Form />
        </div>

    )
}






