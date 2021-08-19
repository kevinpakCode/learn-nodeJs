const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
  process.env.DB_NAME, //Data base name
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
)