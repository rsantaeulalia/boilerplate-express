var express = require('express');
var app = express();
console.log("Hello world");

app.use(function logRequests(req, res, next){
    console.log(`${req.method} ${req.path} -${req.ip}`);
    next();
});

app.get("/", function returnFile(req, res) {
    const absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
});

app.get("/json", function returnFile(req, res) {
    let aTestObject = {"message": "Hello json"}

    if(process.env.MESSAGE_STYLE == 'uppercase'){
        aTestObject = {"message": "HELLO JSON"}
    }

    res.json(aTestObject)
});

app.use("/public", express.static(__dirname + "/public"));






























module.exports = app;
