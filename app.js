const express = require("express");
const indexRouter = require("./routes/indexRoutes");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT, () =>
  console.log(`Server started at localhost at port ${PORT}`)
);
