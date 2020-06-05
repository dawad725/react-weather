import React, { Component } from 'react';
import Form from "../components/Form"
import { withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
    title: {
        textAlign: "center",
        margin: "0",
        paddingTop: "30%"
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

            <div>
                <h1 className={classes.title}>
                    Dave's Weather Station
                </h1>
                <Form />
            </div>

        )
    }


}





export default withStyles(useStyles)(Home);