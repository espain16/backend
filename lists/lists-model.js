const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    remove,
    update_list
}

//create a list 
function add(todo) {
    return db('lists')
    .insert(todo)
    .then(ids=>({id:ids[0]}));
    
}

//get all list 
function find(){
    return db('lists')
    .select('list_name','id')
}

//delete a list 
function remove(id){
 return db('lists').where('id', Number(id)).del()
}

//update list
function update_list(id, todo){
    return db('lists').where('id', Number(id)).update(todo)
}
