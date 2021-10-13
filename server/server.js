const express = require("express");
require("./db");

const app = express();
const router = require("./routes");

const port = process.env.port || 4000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
