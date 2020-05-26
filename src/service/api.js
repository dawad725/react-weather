import axios from "axios";
// import Home from "../Pages/Home"

const baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=1860a69c6a9afd9a53fdd80c14c3bb78"



export async function searchCity(city) {
    try {
        const res = await axios.get(baseURL + city + apiKey);
        const data = res.data
        console.log(data)
        return data
    }
    catch (e) {
        console.log("We have an error", e)
    }

}