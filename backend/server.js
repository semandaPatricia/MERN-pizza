const express = require ('express')
const app = express()
const cors =require('cors')
const mongoose = require ('mongoose')
const connectDB = require('./config/database')
//const Pizza = require('./models/pizzaModel')
require('dotenv').config({path: './config/.env'})
app.use(cors())

const PORT =  process.env.PORT || 8000;

connectDB()

/*middleware*/
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 


/*routes basic*/
app.get('/', (req, res) => {
    res.send('hello world ')

 })

 app.get('/getpizzas', (req, res) => {
  Pizza .find ({} ,(err ,docs) => {
    if (err){
        console.log(err)
    }else{
        res.send (docs)
    }
  })

 })


/*port*/
app.listen(PORT, function () {
    console.log(`app listening on port ${PORT}!`);
  });