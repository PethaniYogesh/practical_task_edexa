const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const db = require("./config/db.config");
const route = require("./routes/index");

app.use(express.json());

/** Connect Routes */ 
route(app);

/** Database connection */
db();

module.exports = app.listen(process.env.PORT, () => console.log(`Server is live on ${process.env.PORT}`));