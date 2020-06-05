import knex from 'knex';

const connection = knex({
  client: 'postgres',
  version: '7.2',
  connection: {
    host: '127.0.0.1',
    user: 'docker',
    password: 'docker',
    database: 'grupoa',
    charset: 'utf8'
  }
});

export default connection;