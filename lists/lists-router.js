const express = require('express');
const router = express.Router();
const db = require('./lists-model');

//find()

router.get('/lists', (req, res) => {
    db.find()
    .then(list => res.json(list))
})

//function remove()
router.delete('/lists/:id', (req, res) => {
    db.remove(req.params.id)
    .then(list => res.json(list))
    .catch(error =>{
        res.status(500).json(error);
    })
})

// function add()
router.post('/lists', (req, res) => {
    db.add(req.body)
    .then(list => res.json(list))
    .catch(error => {
        res.status(500).json(error);
    })

})

//update
router.put('/lists/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    db.update_list(id, body)
    .then(list =>res.json(list))
    .catch(error => {
        res.status(500).json(error);
    })
})

module.exports = router