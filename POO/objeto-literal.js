// Objeto 
let pessoa = {
    nome: 'Amanda',
    dataNasc: new Date(2000, 8, 5, 12).toLocaleString("pt-br"),
    altura: 1.69,
    peso: 65,
    senha: "123a",
    idade: 25,

    maiorDeIdade (){
        return this.idade >= 18;
    },
    apresentar(){
        return `Olá, eu me chamo ${this.nome}, minha idade é ${this.idade}`
    }
};
    console.log(pessoa)
    console.log(pessoa.maiorDeIdade);
    console.log(pessoa.apresentar);
    
    