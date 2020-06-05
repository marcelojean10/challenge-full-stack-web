import Knex from 'knex';

export async function up(knex: Knex) {

  return knex.schema.createTable('students', function(table)  {
      table.increments('ra').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('cpf').notNullable();
  });

}

export async function down(knex: Knex) {
  return knex.schema.dropTable('students');
}