import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    title: {
        textAlign: "center",
        margin: "0",
        padding: "1em"
    }
}))


const Today = () => {
    const classes = useStyles();

    return (
        <div className={classes.title}>
            <p>Today's weather is... </p>
        </div>
    )
}


export default Today;


