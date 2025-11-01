import express from "express";
import { log } from "node:console";

const app = express()

//serviço = API

//rota que o cliente irá solicitar
app.get("/", (req, res) => {
    res.send("Primeiro dia com Node");
})

app.listen(3000, () => {
    console.log("Iniciando minha API com express");
})