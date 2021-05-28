var express = require('express');
var app = express();
console.log("Hello world");

app.get("/", function returnFile(req, res) {
    const absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
});

app.get("/json", function returnFile(req, res) {
    const aTestObject = {"message": "Hello json"}
    res.json(aTestObject)
});

app.use("/public", express.static(__dirname + "/public"));
































module.exports = app;
