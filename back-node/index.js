const express = require('express')
const app = express()

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
