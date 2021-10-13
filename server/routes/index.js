const express = require("express");

const router = express.Router();
const connection = require("../db");

router.get("/tasks", (req, res) => {
  const query = "SELECT * FROM Task";
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

module.exports = router;
