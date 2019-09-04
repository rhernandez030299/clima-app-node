const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(dirreccion) => {

    try {

        const coordenadas = await lugar.getLugarLatLng(dirreccion);
        const clima_grados = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima de ${dirreccion} es de ${clima_grados}`;
    } catch (error) {

        return `No se pudo determinar el clima de ${dirreccion}`;

    }

}

getInfo(argv.direccion).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});