import axios from "axois";


const baseURL = "api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "appid=1860a69c6a9afd9a53fdd80c14c3bb78"



export function searchCity(city) {
    axios.get(baseURL + city + apiKey)
    return
}