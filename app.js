const express = require("express");
const path = require("path");
require("dotenv").config();

const db = require("./db");

// variables
const app = express();
const port = process.env.SERVER_PORT || 5001

app.use(require("./routes"));

app.get("/",(req, res)=>{
  res.sendFile(__dirname, path.join("./views/index.html"))
})

app.listen(port, (err)=>{
  if (err) {
    console.log("Sorry an error occured when connecting to server:", err)
  } else {
    console.log("Server is running on port:",port)
  }
})

// DATABASE
// Authenticate connection to database
const testConnection = async () => {
  try {
    await db.authenticate();
    console.log(
      `Connection to ${process.env.DB_NAME} has been established successfully.`
    );
  } catch (error) {
    console.error(`Unable to connect to ${process.env.DB_NAME}:`, error);
  }
};

testConnection();