"use strict";
/* --------------------------------------
    NODEJS EXPRESS | Stock Management API
----------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/purchase:

const purchase = require("../controllers/purchase");

// URL: /purchases

router.route("/").get(purchase.list).post(purchase.create);

router
  .route("/:id")
  .get(purchase.read)
  .put(purchase.update)
  .patch(purchase.update)
  .delete(purchase.delete);

/* ------------------------------------------------------- */
module.exports = router;
