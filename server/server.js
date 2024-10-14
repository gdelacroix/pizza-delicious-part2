const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv')
const connectDB = require('./config/config')

const morgan = require('morgan')

// config dotenv
dotenv.config()

// connexion mongoDB
connectDB()

const app=express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))
// Configure CORS
app.use(cors());

// Route
app.use('/api/pizzas',require("./routes/pizzaRoute"))
app.get("/",(req,res)=>{
    res.send('<h1>Hello from Node server nodemon</h1>')
})

const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`serveur démarré en mode ${process.env.NODE_ENV} sur le port ${process.env.PORT}`);
})



