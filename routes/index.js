const express = require("express");
const router = express.Router()

router.use("/api/orders", require("./api/orderRoute"));

module.exports = router;