const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const saudacao = require('./saudacaoMid')

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(saudacao('Valter'))

app.get('/clientes/relatorio', (req,res) =>{
  res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) =>{
  // let corpo = ''
  // req.on('data', function(parte){
  //   corpo += parte
  // })

  // req.on('end', function(){
  //   res.send(corpo)
  // })

  res.send(JSON.stringify(req.body))
})

app.get('/cliente/:id', (req,res) =>{
  res.send(req.params.id)
})

app.get('/opa', (req,res) =>{

  res.json([
    {id: 7, name: 'valter'},
    {id: 72, name: 'valter2'},
    {id: 1, name: 'valter1'}
  ])

  // res.json({
  //   name: "teste",
  //   name2: "teste3"
  // })
  //res.send('BackEnd Node.js')
})

app.listen(3000, ()=>{
  console.log('Backend executando...')
})
