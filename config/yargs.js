const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        //Si no especifica un valor para limite tiene el por defecto
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
            //Primer argumento nombre a llamar a la acción, segundo la descripción, y tercero un objeto que tendrá los parámetros que recibirá
            .command('listar', 'Lista los elementos de la tabla de multiplicar', options)
            .command('crear', 'Genera un archivo con la tabla de multiplicar',options)
            .help()
            .argv

module.exports = {
    argv
}