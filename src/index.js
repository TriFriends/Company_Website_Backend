import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import pricingRoutes from './routes/pricing'
import feedbackRoutes from './routes/feedbacks';
import { PORT } from './config/variables'
import { dbConfig } from './config'

const app = express()
const router = express.Router()

//basic config
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
dbConfig()

//routes
app.use('/pricing', pricingRoutes(router))
app.use('/feedback', feedbackRoutes(router))

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`)
})
