const mongoose = require('mongoose')

const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://mohn08052006:mohn11w1@cluster0.ywt1m.mongodb.net/CA1')
        console.log("Database connected Successfully")
    } catch (error) {
        console.error("Server Error", error.message)
    }
}

module.exports = connectDB