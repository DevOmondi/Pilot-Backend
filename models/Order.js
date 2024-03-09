const {  DataTypes } = require("sequelize");

const db = require("../db");

const Order = db.define("Order", {
  orderType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  orderQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  orderStatus: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

// console.log(Order === db.models.Order)
module.exports = Order;

