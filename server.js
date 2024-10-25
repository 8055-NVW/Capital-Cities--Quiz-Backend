//IMPORTS 
import "dotenv/config"
import express from "express"
import cors from "cors"
import axios from "axios"

//GLOBAL VARIABLES
const app = express()
const PORT = process.env.PORT
const COUNTRY_API_URL = process.env.COUNTRY_API_URL

app.use(cors())
app.use(express.json())

// VARIABLES
let countriesArr = []

// FUNCTIONS
// function to get countries data from API
async function getCountries() {
    try {
        const res = await axios.get(COUNTRY_API_URL);
        // filter out invalid options
        const validCountries = res.data.data.filter(country => {
            return country.capital && country.capital !== ""
        })
        countriesArr = validCountries
        return countriesArr;
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
}

// ROUTES
// create endpoint to get the quiz data
app.get('/quiz', async (req, res) => {
    try {
        await getCountries()
        // select a random counrty
        const randIndex = Math.floor(Math.random() * countriesArr.length)
        const correctCountry = countriesArr[randIndex]        
        const wrongAnswers = []        
        const wrongIndices = new Set([randIndex])

        // logic to get some random numbers
        while (wrongAnswers.length < 2) {            
            const index = Math.floor(Math.random() * countriesArr.length)            
            if (!wrongIndices.has(index)) {
                wrongAnswers.push(countriesArr[index].capital)
                wrongIndices.add(index)
            }
        }
        // spread and shuffle the answers
        const answers = [...wrongAnswers, correctCountry.capital].sort(() => Math.random() - 0.5)
        // Return the data
        res.json({
            country: correctCountry.name,
            answers: answers,
            correctAnswer: correctCountry.capital
        })
    }    
    catch (error) {
        console.error('Error fetching countries:', error);
        res.status(500).send('Error fetching countries');
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})