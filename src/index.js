import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import pricingRoutes from './routes/pricing'
import feedbackRoutes from './routes/feedbacks';
import { PORT } from './config/variables'
import { dbConfig } from './config'
import routes from './routes'

const app = express()
const router = express.Router()

//basic config
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
dbConfig()

//routes
app.use('/pricing', routes.pricing(router))
app.use('/feedback', routes.feedback(router))
app.use('/order', routes.order(router))
app.use('/user', routes.user(router))
app.use('/project', routes.project(router))


app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`)
})
