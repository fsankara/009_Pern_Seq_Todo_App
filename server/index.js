const express = require("express");
const sequelize = require("./util/database");
const Todo = require("./models/todos");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use("/todos", require("./routes/todos"));

(async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(5000, () => {
      console.log("Server is starting on port http://localhost:5000");
    });
  } catch (error) {
    console.error(error.message || error);
  }
})();
