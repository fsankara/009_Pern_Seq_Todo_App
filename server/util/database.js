const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  username: "postgres",
  password: "postgres",
  database: "pernstackseq",
  host: "localhost",
  port: "5432",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;