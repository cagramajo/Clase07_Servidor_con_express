const moment = require('moment');

let fecha1 =  moment([2021, 08, 21]);
let fecha2 = moment([2018, 02, 10]);
let resultado = fecha1.diff(fecha2, 'days');

console.log('Esta es una prueba! ', resultado);