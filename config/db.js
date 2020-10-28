const Sequelize = require('sequelize');
// extraer variable de variables.env
require('dotenv').config({ path:'variables.env'})

const db = new Sequelize(
    process.env.BD_NOMBRE, 
    process.env.DB_USER,
    process.env.DB_PASS, {
  host: process.env.BD_HOST,
  dialect: 'mysql',
  port: process.env.BD_PORT,
  
  define: {
      timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db;