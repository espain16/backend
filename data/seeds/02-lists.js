
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lists').del()
    .then(function () {
      // Inserts seed entries
      return knex('lists').insert([
        {
          id: 1,
          user_id: 1,
          list_name:'Spring Cleaning',
          
        },
        {
          id: 2,
          user_id: 2,
          list_name:'workout',
          
        }
      ]);
    });
};
