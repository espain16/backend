
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        {
          id: 1, 
          todo_name: 'wash car', 
          description:'vacuum interior, wash car, wax car', 
          list_id:1, 
          user_id:1, 
          complete:false
        },
        {
          id: 2, 
          todo_name:'attend hot yoga', 
          description:'user that lovely yoga membership you purchased', 
          list_id: 2, 
          user_id: 2, 
          complete:false
        }
      ]);
    });
};
