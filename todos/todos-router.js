const express = require('express');
const router = express.Router();
const db = require('./todos-model');

//find()
router.get('/', (req, res) => {
    db.find()
    .then(todo => res.json(todo))
})

//function remove()
router.delete('/:id', (req, res) => { 
    db.remove(req.params.id)
    .then(todo => res.json(todo))
    .catch(error => {
        res.status(500).json(error);
    })
})
//function add()
router.post('/', (req, res) => {
    db.add(req.body).then(todo => res.json(todo)).catch(error => {
        res.status(500).json(error);
    })
})
//update
