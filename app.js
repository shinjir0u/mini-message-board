const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use("/", (request, response) => {
  response.end("hello");
});

app.listen(PORT, () =>
  console.log(`Server started at localhost at port ${PORT}`)
);
