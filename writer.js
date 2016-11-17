'use strict';
const fs = require('fs');
const studente = require('./studente.json');

const text = studente.name + ' ' + studente.surname + ' ' + studente.age;
const path = './text.txt';

fs.writeFile(path, text, error => {
    console.log('file creato con successo');
});

console.log('sto scrivendo il file...');