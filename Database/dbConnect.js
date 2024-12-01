const { Sequelize } = require('sequelize')

// Setup Sequelize
const sequelize = new Sequelize({
  dialect: 'mysql', // Specifierar vilken databas vi jobbar med
  host: 'localhost',
  username: 'Hans',
  password: 'Internet2024!',
  database: 'frontend'
})

module.exports = sequelize
