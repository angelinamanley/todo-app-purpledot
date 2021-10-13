const express = require("express");
require("./db");

const app = express();
const router = require("./routes");
const cors = require('cors')

const port = process.env.port || 4000;
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, 
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
