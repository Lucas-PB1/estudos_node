const multiplicacao = require('./modules/mod1');
const Carro = require('./modules/mod2');
const path = require('path');

// Parte 1
console.log(multiplicacao(2, 2));

// Parte 2
let ferrari = new Carro('Ferrari 2023', 'Ferrari', 220);

console.log(`Velocidade atual da ${ferrari.nome}: ${ferrari.velocidade}km`);
ferrari.acelerar();
console.log(`Acelerou....`);
console.log(`Velocidade atual da ${ferrari.nome}: ${ferrari.velocidade}km`);

// Parte 3
// Caminho da pasta e caminhando entre pastas
console.log(path.resolve(__dirname, '..', 'auta1/modules'));