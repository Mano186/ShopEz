const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')
const cookieParser = require('cookie-parser')
const allUsers = require('../controller/user/allUsers');

const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json({ limit: '10mb' })) // Adjust the limit as needed
app.use(cookieParser())
app.use("/api",router)

const PORT = process.env.PORT || 8080

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Connected to DB")
        console.log("Server is running on port " + PORT)
    })
})
