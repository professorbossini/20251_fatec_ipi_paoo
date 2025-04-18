const express = require('express')
const app = express()
app.use(express.json())
let id = 1
const lembretes = {
  1: {
    id: id,
    texto: 'Fazer feira'
  } 
}

//GET /lembretes () => {} (endpoint)
app.get('/lembretes', (req, res) => {
  res.json(lembretes)
})

//POST /lembretes () => {} (endpoint)
app.post('/lembretes', (req, res) => {
  id = id + 1
  //pegar o texto do corpo da requisição
  //a requisição é o objeto req
  //req tem uma propriedade chamada body
  //o body, por sua vez, é o objeto json enviado a partir da thunder
  // const texto = req.body.texto
  const { texto } = req.body
  lembretes[id] = {
    id,
    texto
  }
  res.status(201).json(lembretes[id])
})

//localhost:porta
const port = 4000
app.listen(port, () => {
  console.log(`Lembretes. Porta ${port}.`)
})
