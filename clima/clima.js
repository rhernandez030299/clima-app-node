const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9b8e1c035e61edadb3918cee287dcedf&units=metric`);

    return resp.data.main.temp
}

module.exports = {
    getClima
}