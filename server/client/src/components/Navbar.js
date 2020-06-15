import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    text: {
        color: "white",
        textDecoration: "none",
        fontWeight: "bold"
    },
    appBar: {
        backgroundColor: "#5588a3"
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar>
                    <Typography variant="h6" >
                        <Link to='/' className={classes.text}>
                            Home
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}