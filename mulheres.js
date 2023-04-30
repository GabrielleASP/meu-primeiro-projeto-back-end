const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
 {
    nome: 'Frida Kahlo',
    imagem:'',
    minibio: 'pintora e revolucionária'
 },
 {
    nome: 'Tarsila do Amaral',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Tarsila_do_Amaral%2C_ca._1925.jpg/240px-Tarsila_do_Amaral%2C_ca._1925.jpg',
    minibio:'pintora e ilustradora'
 },
 {
    nome:'Conceição Evaristo',
    imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2r8ryOC4KpZnszZOY5TuIGj8wxfmIE8UPIx1pyhzt&s',
    minibio: 'linguista e escritora'
 }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)