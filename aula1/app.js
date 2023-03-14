const mod1 = require('./modules/mod1');
const { Pessoa } = require('./modules/mod2');
const mod3 = require('./modules/mod3');
const path = require('path');
const axios = require('axios');

// Parte 1
mod1.falaNome();

// Parte 2
const p1 = new Pessoa('Lucas');
console.log(p1);

// Parte 3
(async function exec() {
    let { data } = await axios('https://www.otaviomiranda.com.br/files/json/pessoas.json');
    console.log(data);
})();

// Parte 4
mod3.falaNome();