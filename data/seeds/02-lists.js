
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lists').del()
    .then(function () {
      // Inserts seed entries
      return knex('lists').insert([
        {
          user_id: 1,
          list_name:'Spring Cleaning',
          task_name: 'clean car',
          description:'wash car, vacuum interior,throw out all trash',
          completed: false
        },
        {
          user_id: 1,
          list_name:'Spring Cleaning',
          task_name: 'clean car',
          description:'wash car, vacuum interior,throw out all trash',
          completed: false
        }
      ]);
    });
};
