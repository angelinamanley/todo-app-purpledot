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

router.patch("/tasks/:id", (req, res) => {
  const id = req.params.id;
  console.log('<<<BODY', req.body)
  const queryColumns = Object.keys(req.body)
    .map((key) => `${key} = ?`)
    .join(", ");
  const updateValues = [...Object.values(req.body), parseInt(id)];
  const query = "UPDATE Task SET " + queryColumns + " WHERE task_id = ?";
  console.log(query);
  console.log(updateValues)
  connection.query(query, updateValues, function( err, result ) {
      if (err) {
          console.log(err)
         return  res.status(500).send()
      }
      res.send(result)
    })
});

module.exports = router;
