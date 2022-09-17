const Sequelize = require("sequelize");
const db = require("../util/database");

const Todo = db.define("todos", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Todo;
