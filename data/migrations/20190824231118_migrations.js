
exports.up = function(knex) {
  return knex.schema
  .createTable('users', users =>{
      users.increments();
      users
      .string('username', 128)
      .unique()
      .notNullable();
 
      users
      .string('password', 128)
      .notNullable();

  })
  .createTable('lists', lists =>{
      lists.increments();
      lists
      .string('list_name', 128)
      .notNullable()

      lists
      .string('task_name', 128)
      .notNullable()

      lists
      .string('description',1000)
      .notNullable()
      
      lists
      .boolean('completed')
      
      lists
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

  })
  
};

exports.down = function(knex) {
  return knex.schema  
  .dropTableIfExists('users')
  .dropTableIfExists('lists')
  
};
