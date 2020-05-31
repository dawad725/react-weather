import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid } from '@material-ui/core/';
import axios from 'axios'

// import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
    container: {
        textAlign: "center"
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: "350px"
        },
    },
    button: {
        marginTop: "1em"
    }
}));

export default function Form() {

    let history = useHistory();

    const classes = useStyles();

    const [city, setCity] = useState('')
    console.log(city, "city")


    const submitValue = (e) => {
        e.preventDefault();

        // declared variable to the backend route we 
        // want to use with out api call 
        const url = '/api/search-city';

        // send our object from the form to the backend route 
        axios
            .post(url, { city: city })

        // after we send the information to the backend 
        // we send the user to the next page we want them to see 
        history.push('./todays-weather')
    }



    return (
        <>
            <Grid container className={classes.container} spacing={3}>
                <Grid item xs={12}>
                    <form
                        className={classes.root}
                        noValidate autoComplete="off"
                        onSubmit={submitValue}
                    >
                        <TextField
                            id="filled-basic"
                            label="City or ZIP code"
                            variant="outlined"
                            onChange={(e) => setCity(e.target.value)}
                            defaultValue=""
                        />
                    </form>
                </Grid>
                <Grid item className={classes.button} xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={submitValue}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

