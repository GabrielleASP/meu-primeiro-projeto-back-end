const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(resquest, response) {
 response.json({
     nome: "Frida Kahlo" ,
     imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/220px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg" ,
     minibio: "artista e revolucionária"
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}
app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)