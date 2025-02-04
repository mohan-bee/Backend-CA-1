const express = require('express')
const app = express()
const connectDB = require('./config/db')

app.get('/', (req,res) =>{
    res.status(200).send("Server is Running Fine...")
})

app.listen(3000, () =>{
    try {
        connectDB()
        console.log("Server is Running")
    } catch (error) {
        console.error("Server Error", error.message)
    }
})