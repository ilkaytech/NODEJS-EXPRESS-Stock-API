"use strict";
/* --------------------------------------
    NODEJS EXPRESS | Stock Management API
----------------------------------------- */
// app.use(authentication):

const Token = require("../models/token");

module.exports = async (req, res, next) => {
  const auth = req.headers?.authorization || null; // Token ...tokenKey...
  const tokenKey = auth ? auth.split(" ") : null; // ['Token', '...tokenKey...']

  if (tokenKey && tokenKey[0] == "Token") {
    const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
      "user_id"
    );
    req.user = tokenData ? tokenData.user_id : undefined;
  }

  next();
};
