//modulos importados
const Sequelize = require("sequelize")
require("dotenv").config()

const connection = new Sequelize('borAdotar', 'root', "grocR)1234", {
    host: 'localhost', 
    dialect: 'mysql', 
    timezone: "-03:00"
})

module.exports = connection