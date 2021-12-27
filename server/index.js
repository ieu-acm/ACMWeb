import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './Routers/userRouter.js'


dotenv.config()

const app = express()

app.use(express.json())
app.use("/users", userRouter);

app.listen(5000, () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log('connected to db'))
    .catch((error) => console.log(error))
})