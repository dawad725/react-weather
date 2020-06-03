import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = theme => ({
    title: {
        textAlign: "center",
        margin: "0",
        padding: "1em",
        fontSize: "75px",
        color: "white"
    }
})


class Today extends Component {
    constructor() {
        super()

        this.state = {
            weatherData: []
        }
    }

    getWeatherDetails() {

        axios.get('/api/search-city-weather')
            .then(response => {
                this.setState({ weatherData: response.data.main })
            })
            .catch(err => console.log(err))

        console.log("bam!", this.state.weatherData)

    }

    componentDidMount() {
        this.getWeatherDetails();
    }


    renderWeather() {
        // console.log("boom", this.state.weatherData.data.main)
        return <div>{this.state.weatherData.temp}</div>
    }

    render() {
        const { classes } = this.props;
        console.log("WEATHER DATA", this.state.weatherData)




        return (
            <>
                <div className={classes.title}>
                    <p>Today's weather is... </p>
                </div>
                <div>
                    {this.renderWeather()}
                </div>
            </>
        )
    }
}




export default withStyles(useStyles)(Today);





