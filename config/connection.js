require('dotenv').config();
const {Sequelize} = require('sequelize');


let sequelize;
console.log(process.env)
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );
}

module.exports = sequelize;