const express = require('express')
const router = express.Router()
const Workout = require('../models/workout')
const { default: mongoose } = require('mongoose')
//get all workouts
router.get('/', async(req, res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
})

//get workout by id 
router.get('/:id', async(req, res)=>{
    const {id} = req.params
    try{
    const workout = await Workout.findById(id)
    res.status(200).json(workout)
    }catch(error){
        return res.status(404).json({error: 'workout does not exist'})
    }
    
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
    //res.json({msg: 'create a new workout'})
})

//delete workout
router.delete('/:id', async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "workout does not exist"})
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    res.status(200).json(workout)
})

//update new workout
router.patch('/:id', async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "workout does not exist"})
    }
    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body 
    })

    res.status(200).json(workout)


})

module.exports = router