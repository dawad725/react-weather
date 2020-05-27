import React, { Component } from 'react';
import Form from "../components/Form"
import { withStyles } from '@material-ui/core/styles';


import backgroundImage from "../images/blue_sky.jpg"

const useStyles = theme => ({
    title: {
        textAlign: "center",
        margin: "0",
        padding: "1em"
    },
    backgroundWrapper: {
        background: `url(${backgroundImage}) no-repeat center center`,
        backgroundSize: "cover",
        // marginBottom: "0"
    }
})



class Home extends Component {
    constructor() {
        super()

        this.state = {
            todaysWeather: [],
            fiveDayForecast: []
        }

    }




    render() {

        const { classes } = this.props;

        return (

            <div className={classes.backgroundWrapper}>
                <h1 className={classes.title}>
                    Dave's Weather Station
                </h1>
                <Form />
            </div>

        )
    }


}





export default withStyles(useStyles)(Home);