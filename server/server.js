const express = require("express");
require("./db");

const app = express();
const port = process.env.port || 4000;

app.use(express.json());

app.get('/', (req, res) => res.send('this is working?'))

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
