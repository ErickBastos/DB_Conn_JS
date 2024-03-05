const server_port = 8081

const express = require("express")
const NovoRegistro = require("./banco")
const app = express()

app.listen(server_port, function()
{
    console.log("Servidor conectado na porta: " + server_port)
})

app.get("/", function(req, res)
{
    res.end("Boas vindas!")
})

app.get("/cadastrar", function(req, res)
{
    // Novo Registro -> Nome, Rua, Bairro, CEP, Cidade, Estado, Obsercação
    NovoRegistro("Laís", "Rua Manuel de Mata Sá", "Jardim Nossa Senhora do Carmo", "08275170", "São Paulo", "SP", "Observacao")
    res.end("Entidade cadastrada!")
})