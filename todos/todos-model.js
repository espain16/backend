const db = require('../data/dbConfig');


module.exports = {
    addTodo,
    findTodo,
    removeTodo,
    update_todo
}

//add a todo
function addTodo(todo){
    return db('todo')
    .insert(todo)
    .then(ids =>({
        id: ids[0]
    }))
}
//get all list 
function findTodo(){
    return db('todo')
    
}

//edit a todo 
function update_todo(id, todo){
    return db('todo')
    .where('id', Number(id))
    .update(todo)
}

//delete a todo 
function removeTodo(id){
    return db('todo')
    .where('id', Number(id))
    .del()
}
