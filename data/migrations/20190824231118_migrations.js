
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
      .string('list name', 128)
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
  .createTable('tasks', tasks =>{
      tasks.increment();
      tasks
      .string('task name', 128)
      .notNullable()

      tasks
      .string('description', 200)
      .notNullable()

      tasks
      .boolean('completed')
      
      tasks
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
  dropTableIfExists('users')
  dropTableIfExists('lists')
  dropTableIfExists('tasks')
};
