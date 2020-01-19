/* Es de File System */
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('=================='.red);
    console.log(`tabla de ${ base }`.red);
    console.log('=================='.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`Resultado: ${base}*${i} = ${base * i} \n`)
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        //Comprobar que base sea un número
        if(!Number(base)) {
            reject(`No es un número!`);
            return;
            //Return para que no continue la función
        }

        let contenido = '';
        for(let i = 1; i <= limite ; i++) {
            contenido += `${base} * ${i} = ${base * i} \n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, contenido , (err) => {
        //   if (err) throw err;
            if(err) 
                reject (err);
            else 
                resolve(`tabla-${base}-limite-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}