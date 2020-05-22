import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        textAlign: "center"
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 600
        },
    },
}));

export default function Form() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="filled-basic" label="City" variant="outlined" />
            </form>
        </div>

    );
}