import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'


const useStyles = theme => ({
    title: {
        textAlign: "center",
        margin: "0",
        padding: "1em",
        fontSize: "100px"
    }
})



class Today extends Component {
    constructor() {
        super()

        this.state = {
            weatherData: []
        }


    }

    componentDidMount() {

        axios.get('/api/search-city-weather')
            .then(weather => {
                this.setState({ weatherData: weather })
            })
            .catch(err => console.log(err))

        console.log("bam!", this.state.weatherData)
    }

    render() {
        const { classes } = this.props;
        console.log("weather DATA", this.state.weatherData)

        return (
            <div className={classes.title}>
                <p>Today's weather is... </p>
            </div>
        )
    }
}




export default withStyles(useStyles)(Today);





