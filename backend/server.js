const express = require('express')
require('dotenv').config()
const workoutRoutes = require('./routes/workouts')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path)
    next()
})
app.use('/api/workouts',workoutRoutes)

mongoose.connect(process.env.MONGO).then(()=>{
    app.listen(4000, ()=>{
        console.log('listening on port 4000')
        console.log('connected to db')
    })
}).catch((error)=>{
    console.log(error)
})