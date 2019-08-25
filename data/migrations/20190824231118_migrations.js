
exports.up = function(knex) {
  return knex.schema
  .createTable('users', users =>{
      users.increment();
      users
      .string('username', 128)
      .unique()
      .notNullable();
 
      users
      .string('password', 128)
      .notNullable();

  })
  .createTable('lists', lists =>{
      lists.increment();
      lists
      .string('task name', 128)
      .notNullable()

      lists
      .integer('lists_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('lists')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

  })

};

exports.down = function(knex) {
  
};
