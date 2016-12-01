//server.js
//Author: Rutgers IEEE ISN Team

var http = require("http");
//Allows parsing of HTTP request bodies
var bodyParser = require("body-parser");
//Web framework for node that simplifies development of web apps
var express = require("express");
//Simulate DELETE and PUT HTTP requests
var methodOverride = require("method-override");
//Logs HTTP requests to the console
var morgan = require("morgan");
var ws = require("ws");

//Initialize express application
var app = express();
var server = http.Server(app);
var wss = new ws.Server({server: server});

//Set up middleware for application
//Set up static files to be served
app.use(express.static(__dirname +"/../client"));
//Log HTTP requests to console (dev = colors!)
app.use(morgan("dev"));
//Parse url-encoded data
app.use(bodyParser.urlencoded());
//Parse JSON data
app.use(bodyParser.json());
app.use(methodOverride());

//Send index.html when hitting frontpage
app.get("/", function(req, res) {
    res.sendFile("index.html");
});

//If running server on different environment, use configured environment's port.
//Otherwise, use 8080
var port = process.env.PORT || 8080;

wss.on("connection", function(ws) {
    console.log("User connected!");

    ws.on("message", function(message) {
        console.log("Received message!: " + message);
        wss.clients.forEach(function(client) {
            client.send(message);
        });
    });
    // ws.send(JSON.stringify({
    //     date: new Date(),
    //     temp: "54",
    //     humid: "32"
    // }));
});

//Listen for connections on port
server.listen(port, function(err) {
    if (err) console.log("Error: " + err);

    console.log("Server currently listening on port " + port + "!");
});
