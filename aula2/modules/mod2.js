module.exports = class Carro {
    constructor(nome, marca, velocidade) {
        this.nome = nome;
        this.marca = marca;
        this.velocidade = velocidade;
    }

    acelerar() {
        this.velocidade++;
    }

    mostramarca() {
        console.log(this.marca);
    }

    nome() {
        console.log(this.nome);
    }
}