const express = require('express')
const db = require('./db')
require('dotenv').config()
const passport = require('./auth')


const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000
app.use(bodyParser.json())

// Middleware function
const logRequest = (req,res,next)=>{
  console.log(`${new Date().toLocaleString()} Request Made to : ${req.originalUrl}`)
  next()
}
app.use(logRequest)
app.use(passport.initialize())
const authMiddleware = passport.authenticate('local',{session:false})


app.get('/' , function (req, res) {
  res.send('Welcome to Our Hotel')
})

const menuRoutes = require('./routes/menuRoutes')
const personRoutes = require('./routes/personRoutes')

app.use('/person',personRoutes)
app.use('/menu',authMiddleware,menuRoutes)

app.listen(PORT,()=>{console.log("Hi Vijay you are two good at coding or programming")}) 
