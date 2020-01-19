
//Al inicio se pone todos los requireds
const argv = require('./config/yargs').argv;
//para exportar colors 
const colors = require('colors');
//funcion crearArchivo traida de multiplicar.js
// const multiplicar = require('./multiplicar/multiplicar');

//Destructuración de objetos
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

//Para ingresar comandos desde la consola
// const argv = process.argv;
// console.log(argv);
// const baseFromArgv = argv[2];
// let arrayBase = baseFromArgv.split('=');
// console.log(arrayBase)
// let base = arrayBase[1];
// let base = argv.base;


//Crear comandos 
const comando = argv._[0];

switch(comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
            console.log(`Archivo creado: ${archivo.green}`)
            }) 
            .catch(e => console.log(e));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('No se reconoce el comando');
}


// console.log("Base: ",argv.base);
// console.log("Limite: ",argv.limite);
const argv1 = process.argv;
// console.log(argv1);


//llamo a la función
// crearArchivo(base).then(archivo => {
//     console.log(`Archivo creado: ${archivo}`)
// }, (err) => {
//     console.log(err)
// }) 

//o 
/* 
    .catch(e => console.log(e));
*/
