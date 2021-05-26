var express = require('express');
var app = express();
console.log("Hello world");

app.get("/", function returnFile(req, res) {
    const absolutePath = __dirname + "views/index.html"
    res.sendFile(absolutePath)
});
































module.exports = app;
