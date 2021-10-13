const mysql = require("mysql");

const connection = mysql.createConnection({
  password: "",
  user: "root",
  host: "localhost",
  database: "todo_app",
});

connection.connect(function(err) {
  if (err) throw err;
  const query =
    "CREATE TABLE IF NOT EXISTS Task (task_id int NOT NULL AUTO_INCREMENT, task VARCHAR(255) NOT NULL, completed TINYINT NOT NULL DEFAULT '0', PRIMARY KEY (task_id))";
  connection.query(query, (err, result) => {
    if (err) throw err;
  });
  console.log("Now connected to db!");
});

module.exports = connection