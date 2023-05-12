const express = require('express')
const workoutRoutes = require('./routes/workouts')
const app = express()

app.use((req, res, next)=>{
    console.log(req.path)
    next()
})
app.use('/api/workouts',workoutRoutes)
app.listen(4000, ()=>{
    console.log('listening on port 4000')
})