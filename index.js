const express = require('express')
let routesIndex = require('./routes/index')
let routesUsers = require('./routes/users')

let app = express()

app.listen(3000,'127.0.0.1', ()=>{

  app.use(routesIndex)
  app.use(routesUsers)
  
  console.log('servidor rodando!')

})