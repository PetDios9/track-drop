const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

//bring in env file
require('dotenv').config()

//express
const app = express()

//middleware
app.use(express.json())

//allowing cross origin resource sharing
app.use(cors({
    origin: 'https://localhost:3000',
    request: 'GET, POST, DELETE',
})) 


//connecting to mongodb & set app listen
const dbURI = process.env.MONGOURI
const port = process.env.PORT

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    //start server listen upon successful connection to mongodb
    .then(() => app.listen(port || 5000))
    .catch(err => console.log(err))

app.get('/', (req,res) => {
    res.send('Hello World')
})