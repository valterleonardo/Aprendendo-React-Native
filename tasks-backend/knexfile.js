module.exports = {
  client: 'postgresql',
  connection: {
    host: '10.1.1.7',
    database: 'tasks',
    user: 'postgres',
    password: 'Postgres2018!'
  },
  pool: {
    min: 2,
    max: 5
  },
  migrations: {
    tableName: 'migrations'
  }
};
