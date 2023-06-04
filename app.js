const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const db = require("./models");
dotenv.config();

const app = express();

// Config Settings
db.sequelize
  .sync()
  .then(() => {
    console.log("🍀 Mysql Database Connected");
  })
  .catch(console.error);

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(
    `⭐️ClassMan Backend Server Running With ${process.env.PORT} PORT⭐️`
  );
});
