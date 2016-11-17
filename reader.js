'use strict';
const fs = require('fs');
const path = './text.txt';

fs.readFile(path, 'utf-8', (error, data) => {

    if (error)
        return console.log(error);

    const values = data.split(' ');
    const studente = {
        name: values[0],
        surname: values[1],
        age: values[2]
    };

    console.log('file letto:', studente);


});

console.log('sto leggendo i dati dal file...');