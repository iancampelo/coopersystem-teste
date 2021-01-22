import axios from 'axios'

const getInvestimentos = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
})

const apiLocationInstance = axios.create({
    baseURL: 'http://api.positionstack.com/v1',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
})

const appId = 'a83d800af84b3adb088ce541ea2920d3'
const access_key = '39e9e11c1ebdae135d30ab6fd7fe8f49'

const getOneCall = (lat, lon) => apiWeatherInstance.get(`/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${appId}`)

const getPastDays = (lat, lon, time) => apiWeatherInstance.get(`/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${appId}`)

const getLatLonFromLocation = (query) => apiLocationInstance.get(`/forward?access_key=${access_key}&query=${query}&limit=1&output=json`)

export default {
    getOneCall,
    getPastDays,
    getLatLonFromLocation,
}
