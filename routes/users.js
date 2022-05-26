let express = require('express')
let routes = express.Router()

routes.get('/users',(req,res)=>{

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json({
    users:[{
      name:'Leo',
      email:'leoleuiz@gmail.com',
      id:1
    }]
  })

})

module.exports = routes