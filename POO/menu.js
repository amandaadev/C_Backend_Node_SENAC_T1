//instalado a biblio que permite entrada de dados
import PromptSync from "prompt-sync";

//aciona a função da biblio
let prompt = PromptSync();


//class é um modelo de algo(objeto)
class Pessoa {

    //atributo privado
    #senha;

    //construtor constroi mais de um objeto
    //para por os valores de cada obj, colocamos via parametro
    constructor(nome, idade, dataNasc, senha, palavraChave) {
        this.nome = nome
        this.idade = idade
        this.dataNasc = new Date(dataNasc).toLocaleString("pt-BR")
        this.#senha = senha
        this.palavraChave = palavraChave
    }

    apresentar() {
        console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos`);
    }

    //metodo especial que permite eu gerenciar a visualizacao da senha
    get senha() {
        const palavraChave = prompt("Para ve a sua senha, você precisa digitar a palavra chave: ");

        //condicional simples
        if (this.palavraChave == palavraChave) {
            return this.#senha;
        }
        else {
            return "Foi mal, tente novamente!";
        }
    }
}

//extends = herança
class Aluno extends Pessoa {
    constructor(nome, dataNasc, senha, RA) {
        super(nome, dataNasc, senha);
        this.RA = RA
    }

    //polimorfismo
    //sobrescrita - override
    //sobrecarga - overload
    apresentar(){
        //interpolação
        console.log(`Olá sou o aluno(a) ${this.nome} e meu R.A. é ${this.RA}`);
        
    }
}

//extends = herança
class Professor extends Pessoa {

    //os parametros são os valores das chaves(propriedades)
    constructor(nome, dataNasc, senha, registro, salario) {

        super(nome, dataNasc, senha);
        //são as chaves = propriedades da classe
        this.registro = registro
        this.salario = salario
    }

        //polimorfismo
    //sobrescrita - override
    //sobrecarga - overload
    // apresentar(){
    //     //interpolação
    //     console.log(`Olá sou o docente ${this.nome} e eu ganho ${this.salario}`);
        
    // }
}

//pergunte ao usuário se ele é professor ou aluno
//se for professor digite 1 e além das perguntas que a class Pessoa já tem, faça perguntas que são da suas proprias caracteristica

//se for aluno digite 2 e além das perguntas que a class Pessoa já tem, faça perguntas que são da suas proprias caracteristica

console.log("BEM-VINDO(A) AO CADASTRO DO SENAC!!!");
console.log("Por gentileza, para continuarmos com seu cadastro, informe se você é Aluno ou Professor🧐");

let professorOuAluno = parseInt(prompt("Digite 1 para Professor ou 2 para Aluno"));

let novaPessoa;

let nomePessoa = prompt("Digite o seu nome: ");
let dataNascPessoa = prompt("Digite sua data de nascimento no formato AAAA/MM/DD");
let senhaPessoa = prompt("Digite sua senha: ");

//verificar o valor digitado
// 3 === compara o valor e o tipo
// 2 == compara somente o valor
if (professorOuAluno === 2) { //condição simples
    //aluno
    let raAluno = prompt("Digite seu R.A.: ");

    //instanciando classe Aluno 
    novaPessoa = new Aluno(
        nomePessoa,
        dataNascPessoa,
        senhaPessoa,
        raAluno
    );
}
else if (professorOuAluno === 1) { //condição encadeada
    //professor
    let salarioProfessor = prompt("Digite seu salario: ");
    let registroProfessor = prompt("Digite seu número de registro: ");

    novaPessoa = new Professor(
        nomePessoa,
        dataNascPessoa,
        senhaPessoa,
        registroProfessor,
        salarioProfessor
    );
}
else { //condição composta
    console.log("Opção inválida! Digite 1 ou 2.");
}

console.log(novaPessoa);
console.log(novaPessoa.apresentar());

//criando o objeto
// const novaPessoa = new Pessoa(
//     nomePessoa,
//     idadePessoa,
//     dataNascPessoa,
//     senhaPessoa,
//     palavraChavePessoa
// );

//aciona a função do objeto já criado
//novaPessoa.apresentar();
//acionando ver a senha
//novaPessoa.senha

//exibir todo o objeto
//console.log(novaPessoa);