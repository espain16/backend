const db = require('../data/dbConfig');

module.exports = {
    findUser,
    findBy,
    add
}

function findUser(){
    return db('users')
}

function findBy(body){
    return db('users').where(body);
}

function add(users){
    return db('users')
    .insert(users)
    .then(ids => ({
        id: ids[0]
    }))
}