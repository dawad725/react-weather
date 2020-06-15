import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    text: {
        color: "black",
        textDecoration: "none"
    },
    appbar: {
        backgroundColor: "#5588a3"
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={classes.appbar}
            >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
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