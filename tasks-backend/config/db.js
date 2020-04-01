const config = require('../knexfile.js')
const knex = require('knex')(config)

// não utilizar para vários nós, controlar como equipe de dba
knex.migrate.latest([config])

module.exports = knex
