import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar'
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import ReportOffIcon from '@material-ui/icons/ReportOff';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: "center",
        paddingTop: "15%",
        [theme.breakpoints.only("xs")]: {
            paddingTop: "30%",
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
    text: {
        textAlign: "center",
        fontFamily: "Helvetica",
        fontSize: "25px",
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
    icon: {
        color: "red",
        fontSize: "200px"
    },
    buttonContainer: {
        paddingTop: "5%",
        [theme.breakpoints.only("xs")]: {
            paddingTop: "15%",
        }
    }
}))


export default function ErrorMessage() {
    let history = useHistory();
    const classes = useStyles();

    // This handles the click on the button within this component
    // when clicked it directs the user to the hone page.
    const tryAgain = (e) => {
        e.preventDefault();

        history.push('/')
    }

    return (

        <>
            <Navbar />
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid item s={12} className={classes.container}>
                        <ReportOffIcon className={classes.icon} />
                        <Typography className={classes.text}>Looks like there was an error with your city or zip code.</Typography>
                    </Grid>
                </Paper>
                <Grid item s={12} className={classes.container}>
                    <div className={classes.buttonContainer}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={tryAgain}
                            className={classes.button}
                        >
                            Please try again
                    </Button>
                    </div>
                </Grid>
            </div>
        </>

    )
}



