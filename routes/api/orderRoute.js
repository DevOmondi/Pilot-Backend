const express = require("express");
const router = express.Router();

const db = require("../../db");
const Order = require("../../models/Order");


router.get("/", (req, res) => {
  Order.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch((err) => console.log("Error:", err));
});

module.exports = router;
