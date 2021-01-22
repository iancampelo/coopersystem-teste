import axios from 'axios'

const apiInvestimentos = axios.create({
    baseURL: 'http://www.mocky.io/v2',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
})

const getInvestimentos = (lat, lon) => apiWeatherInstance.get(`/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${appId}`)

const getPastDays = (lat, lon, time) => apiWeatherInstance.get(`/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${appId}`)

const getLatLonFromLocation = (query) => apiLocationInstance.get(`/forward?access_key=${access_key}&query=${query}&limit=1&output=json`)

export default {
    getOneCall,
    getPastDays,
    getLatLonFromLocation,
}
