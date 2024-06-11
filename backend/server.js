import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()


app.get('/', (req, res)=> {
    res.send('its an initial path...')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const port = process.env.PORT

app.listen(port, console.log(`Hey there I am ${process.env.NODE_ENV} at ${port}`))