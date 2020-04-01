module.exports = {
  client: 'postgresql',
  connection: {
    database: 'tasks',
    user:     'postgres',
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