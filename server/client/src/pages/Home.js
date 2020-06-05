import React from 'react';
import Form from "../components/Form"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    title: {
        textAlign: "center",
        margin: "0",
        paddingTop: "30%",
        color: "white"
    }
}))


export default function Home() {

    const classes = useStyles();

    return (

        <div>
            <h1 className={classes.title}>
                Dave's Weather Station
                </h1>
            <Form />
        </div>

    )
}






