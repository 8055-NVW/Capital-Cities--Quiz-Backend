// imports 
import "dotenv/config"
import express from "express"
import cors from "cors"
import axios from "axios"


//Global Variables
const app = express()
const PORT = process.env.Port || 5000
const COUNTRT_API_URL = Process.env.COUNTRT_API_URL

app.use(cors())
app.use(express.json())

// Variables
let countriesArr = []

// Functions


// Routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})