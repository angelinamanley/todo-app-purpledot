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

router.get("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM Task where task_id = ?";
  connection.query(query, id, function (err, result) {
    if (err) {
      res.status(400).send("Unable to retrieve task.");
    }
    res.send(result);
  });
});

router.post("/tasks", (req, res) => {
  const query = "INSERT INTO Task SET ?";
  connection.query(query, req.body, function (err, result) {
    if (err) {
      return res.status(400).send("Unable to create new task!");
    }
    res.send(result);
  });
});

router.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM Task where task_id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).send();
    }
    res.send({ success: true });
  });
});

module.exports = router;
