import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid } from '@material-ui/core/';

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
    const classes = useStyles();

    const [city, setCity] = useState('')
    console.log(city, "city")



    const submitValue = (e) => {
        e.preventDefault();
        const formDetails = {
            "city": city
        }
        console.log(formDetails)

    }

    return (
        <>
            <Grid container className={classes.container} spacing={3}>
                <Grid item xs={12}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            id="filled-basic"
                            label="City"
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