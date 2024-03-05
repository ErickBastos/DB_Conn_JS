const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function () {
    console.log("Servidor ativo")
}).catch(function (error) {
    console.log("falha de conexão" + error)
})

const Agendamentos = sequelize.define("agendamentos", {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.INTEGER
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    observacao: {
        type: Sequelize.TEXT
    }

})

// Agendamentos.sync({force: true})

var NovoRegistro = (nome, endereco, bairro, cep, cidade, estado, observacao) =>
{

    Agendamentos.create({
        nome: nome,
        endereco: endereco,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        estado: estado,
        observacao: observacao
    })

}


module.exports = NovoRegistro;