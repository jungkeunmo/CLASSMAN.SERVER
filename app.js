const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(
    `⭐️ClassMan Backend Server Runnung With ${process.env.PORT} PORT⭐️`
  );
});
