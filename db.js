const path = require("path");
// const { Client } = require("pg");
require("dotenv").config();
const { Sequelize } = require("sequelize");

// Use Sequelize ORM to connect to database
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);


module.exports = db;