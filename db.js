const mongoose = require('mongoose')
// Define the MongoDb Connection Url
const mongoUrl = "mongodb://localhost:27017/Vijay"
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    UseUnifiedTopology:true
})
const db = mongoose.connection
db.on('connected',() =>{ console.log("Connected to mongodb  server")})
module.export = db;