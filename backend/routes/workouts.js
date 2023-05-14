const express = require('express')
const router = express.Router()
const Workout = require('../models/workout')
//get all workouts
router.get('/', (req, res)=>{
    res.json({msg: 'Get all workouts'})
})

//get workout by id 
router.get('/:id', (req, res)=>{
    res.json({'id': req.params.id})
})

//create new workout
router.post('/', async(req, res)=>{
    const {title, load, reps} = req.body
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({msg: 'create a new workout'})
})

//delete workout
router.delete('/:id', (req, res)=>{
    res.json({msg: 'delete a new workout'})
})

//update new workout
router.patch('/:id', (req, res)=>{
    res.json({msg: 'update a workout'})
})

module.exports = router