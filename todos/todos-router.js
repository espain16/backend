const express = require('express');
const router = express.Router();
const db = require('./todos-model');

//find()
router.get('/todos', (req, res) => {
    db.findTodo()
    .then(todo => {
        for (let i = 0; i < todo.length; i++){
           if (todo[i].completed !== 0){
               todo[i].completed = false
                todo
           }else{
                todo[i].completed = true
                 todo
           }
        }res.json(todo)
        
    })
})

//function remove()
router.delete('/todos/:id', (req, res) => { 
    db.removeTodo(req.params.id)
    .then(todo => res.status(200).json({message:'Todo successfully deleted'}))
    .catch(error => {
        res.status(500).json(error);
    })
})
//function add()
router.post('/todos', (req, res) => {
    db.addTodo(req.body)
    .then(todo => res.json(todo))
    .catch(error => {
        res.status(500).json(error);
    })
})
//update

router.put('/todos/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    db.update_todo(id, body)
    .then(todo => res.status(200).json({message: 'Todo successfully updated'}))
    .catch(error => {
        res.status(500).json(error);
    })
})

module.exports = router