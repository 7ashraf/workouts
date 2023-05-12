const express = require('express')
const router = express.Router()

//get all workouts
router.get('/', (req, res)=>{
    res.json({msg: 'Get all workouts'})
})

//get workout by id 
router.get('/:id', (req, res)=>{
    res.json({'id': req.params.id})
})

module.exports = router