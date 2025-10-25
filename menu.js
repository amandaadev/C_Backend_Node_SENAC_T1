import PromptSync from "prompt-sync";

let prompt = PromptSync();

//class é um modelo de algo(objeto)
//construtor serve para usar o modelo várias vezes, constrói mais de um objeto
//para por os valores de cada obj, colocamos via parâmetro
class Pessoa{
    //atributo privado
    #senha;

    constructor(nome, idade, dataNasc, senha, palavraChave) {
        this.nome = nome
        this.idade = idade
        this.dataNasc = new Date(dataNasc).toLocaleString("pt-br")
        this.#senha = senha
        this.palavraChave = palavraChave
    }

    apresentar(){
    console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos`);
    }

    get senha(){
   const palavraChave = prompt("Para ver a sua senha, você precisa digitar a palavra chave: ");
   //condicional simples
    if(this.palavraChave == palavraChave){
        console.log(this.#senha);
        return this.#senha        
    }else {
        return "Foi mal, tente novamente!"
    }
    }
}

let nomePessoa = prompt("Digite o seu nome: ")
let idadePessoa = parseInt(prompt("Digite sua idade: "));
let dataNascPessoa = prompt("Digite a sua data de nascimento no formato AAAA/MM/DD ")
let senhaPessoa = prompt("Digite sua senha: ")
let palavraChavePessoa = prompt("Digite a palavra chave, caso um dia queira ver a sua senha: ")

//criando o objeto
    const novaPessoa = new Pessoa(
        nomePessoa, 
        idadePessoa, 
        dataNascPessoa, 
        senhaPessoa, 
        palavraChavePessoa);

    //aciona a função do objeto já criado
    novaPessoa.apresentar();
    novaPessoa.senha

    //exibir todo o objeto
    console.log(novaPessoa);
    