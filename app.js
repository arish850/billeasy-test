var express = require("express");

var indexRouter = require("./routes/index");
var employeesRouter = require("./routes/employees");

var app = express();

app.use(express.json());

app.use("/", indexRouter);
app.use("/employees", employeesRouter);

module.exports = app;
