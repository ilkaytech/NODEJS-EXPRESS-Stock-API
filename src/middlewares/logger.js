"use strict";
/* --------------------------------------
    NODEJS EXPRESS | Stock Management API
----------------------------------------- */
// app.use(logger):

const morgan = require("morgan");
const fs = require("fs");

const now = new Date();
const today = now.toISOString().split("T")[0];

module.exports = morgan("combined", {
  stream: fs.createWriteStream(`./logs/${today}.log`, { flags: "a+" }),
});
