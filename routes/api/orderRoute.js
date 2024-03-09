const express = require("express");
const router = express.Router();

const db = require("../../db");
const Order = require("../../models/Order");

// Fetch existing orders in the db
router.get("/", (req, res) => {
  Order.findAll()
    .then((orders) => {
      console.log(orders);
      res.sendStatus(200);
    })
    .catch((err) => console.log("Error:", err));
});

// Add orders to the db
router.get("/placeOrder", (req, res) => {
  const data = {
    orderType: "sand",
    orderQuantity: 2,
    orderStatus: "received"
  }

  let {orderType, orderQuantity, orderStatus} = data;
  Order.create({
    orderType,
    orderQuantity,
    orderStatus
  })
  .then((orders) => console.log("The following are orders placed", orders))
  .catch(err => console.log("Couldn't place order:", err))
} )

module.exports = router;
