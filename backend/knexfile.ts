import path from 'path';

module.exports = {
  client: 'postgres',
  version: '7.2',
  connection: {
    host: '127.0.0.1',
    user: 'docker',
    password: 'docker',
    database: 'grupoa',
    charset: 'utf8'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  }
};