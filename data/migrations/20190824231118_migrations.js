
exports.up = function(knex) {
  return knex.schema
  .createTable('users', users => {
      users.increments();
      users
      .string('username', 128)
      .unique()
      .notNullable();
 
      users
      .string('password', 128)
      .notNullable();

  })
  .createTable('lists', lists => {
      lists.increments();
      lists
      .string('list_name', 128)
      .notNullable()

      lists
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    
      
    })
  
  .createTable('todo', todo => {
    todo.increments();
    todo
    .string('todo_name',128)
    .notNullable()
    todo
    .string('description',1000)
    .notNullable()
    
    todo
    .boolean('complete')
    .default(false)
    
    todo
    .integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

    todo
    .integer('list_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('lists')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
  })  
  };

exports.down = function(knex) {
  return knex.schema  
  .dropTableIfExists('users')
  .dropTableIfExists('lists')
  .dropTableIfExists('todo')
  
};
