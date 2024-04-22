const mongoose = require('mongoose')
require('dotenv').config()

// Define the MongoDb Connection Url
const mongoUrl = "mongodb://localhost:27017/Vijay"
//const mongoUrl = "mongodb+srv://vksinghsintoo:Vksingh94@hotels.2ilpad3.mongodb.net/"
//const mongoUrl = process.env.DB_URL
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    UseUnifiedTopology:true
})
const db = mongoose.connection
db.on('connected',() =>{ console.log("Connected to mongodb  server")})
module.exports = db;