//Está chamando para utilizar o framework Express
import express from "express";

//chamamos o objeto com o nome express e passamos o valor dele mesmo
//podendo acessar suas caracteristicas e comportamentos
const app = express();

//fala para o serviço conseguir interpretar em JSON
app.use(express.json())

//para criar um array de frutas
let frutas = ["Uva", "Carambola", "Melância", "Maracuja", "Morango"]

//serviço = API

//rota que o cliente irá solicitar
//get com a rota / é a rota padrão
app.get("/", (req, res) => {

    //retornado uma mensagem ao nosso cliente
    res.end("Respondendo: Primeiro dia com NODE");

    //end quando finaliza a requisição
})

//rota usuario/1
app.get("/usuario/:id", (req, res) => {
    let id = req.params.id;
    //encerra a requisição - pode passar valores diferentes de string, como objeto, array e entre outros
    res.send(`O cliente está querendo ver o usuário om o id ${id}`);

    //end também encerra a requisição - porém, só aceita receber valores do tipo string ou buffer
    //res.end()
})

//uma rota chamada aluno que receba 2 parametros (nome e curso)
//e exiba em formato de objeto os parametros passados
app.get("/aluno/:nome/curso/:curso", (req, res) => {
    //objeto literal
    const novoAluno = {
        nome: req.params.nome,
        curso: req.params.curso
    }

    res.send(novoAluno);

})

//crie uma rota  de cadastro chamada fruta
app.post("/fruta", (req, res) => {
    const novaFruta = req.body.nome;

    //o push vai inserir o dado em ordem sequencial
    frutas.push(novaFruta);
    res.send("Fruta cadastrada com sucesso");

})

app.get("/fruta", (req, res) => {

    res.send(frutas);
})

app.put("/fruta/:posicao", (req, res) => {
    const posicao = req.params.posicao;
    const novoNome = req.body.nome;

    //acessamos a posição da fruta deseja
    //e atribuimos um novo valor
    frutas[posicao] = novoNome;
    res.send("O nome da fruta foi substituída para: " + novoNome);
})

//crie um rota para deletar a fruta pela sua posicao
app.delete("/fruta/:posicao", (req, res) => {
    const posicao = req.params.posicao;

    frutas.splice(posicao, 1);
    res.send(`A fruta da posição ${posicao} foi excluída! Acesse a rota que exibe todas as frutas para confirmar!`);
})

//app listen precisa estar como a ultima instrução
app.listen(3000, () => {
    console.log("Iniciando minha API com Express");
})