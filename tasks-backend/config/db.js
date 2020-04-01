const config = require('../knexfile.js')
const knex = request('knex')(config)

knex.migrate.latest([config])

module.exports = knex
