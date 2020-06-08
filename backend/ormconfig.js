console.log('process.env.DATABASEE_URL :>> ', process.env.DATABASE_URL);

module.exports = {
  name: 'default',
  type: 'postgres',
  //url: process.env.DATABASE_URL,
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'postgres',
  port: 5432,
  entities: ['dist/app/models/*.js'],
  migrations: ['dist/database/migrations/**/*.js'],
  cli: {
    migrationsDir: ['src/database/migrations/'],
    entitiesDir: 'src/models',
  },
};
