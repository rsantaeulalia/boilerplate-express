var express = require('express');
var app = express();
console.log("Hello world");

app.get("/", (req, res) => { res.send("Hello Express") })

































module.exports = app;
