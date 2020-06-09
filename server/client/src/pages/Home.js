import React from 'react';
import Form from "../components/Form"
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar'


const useStyles = makeStyles(theme => ({
    title: {
        textAlign: "center",
        margin: "0",
        paddingTop: "20%",
        color: "white"
    }
}))


export default function Home() {

    const classes = useStyles();

    return (

        <div>
            <Navbar />
            <h1 className={classes.title}>
                Dave's Weather Station
                </h1>
            <Form />
        </div>

    )
}






