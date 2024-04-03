const express = require('express')
const db = require('./db')


const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Welcome to Our Hotel')
})

const menuRoutes = require('./routes/menuRoutes')
const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)
app.use('/menu',menuRoutes)
app.listen(3000,()=>{console.log("Hi Vijay you are two good at coding or programming")}) 
