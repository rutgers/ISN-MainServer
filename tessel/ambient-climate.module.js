//ambient-climate.module.js
//Author: Rutgers IEEE ISN Team

//Require tessel module
var tessel = require("tessel");
//Ambient module library
var ambientlib = require("ambient-attx4");
//Climate module library
var climatelib = require("climate-si7020");
//For websocket connections
var WebSocket = require("ws");
//To get name of tessel w/ os.hostname()
var os = require("os");

//Use Tessel port A for climate
var climate = climatelib.use(tessel.port["A"]);
//Use Tessel port B for climate
var ambient = ambientlib.use(tessel.port["B"]);

//WebSocket connection to main server
var ws = new WebSocket("ws://rutgersisn.localtunnel.me");

//When climate module is ready
climate.on("ready", function() {
    console.log("Connected to climate module!");

    //When Websocket connection is opened
    ws.on("open", function() {
        console.log("Opened connection!");

        //Log temperature and humidity every second
        var temperature;
        var humidity;

        setInterval(function() {
            climate.readTemperature("f", function(err, temp) {
                climate.readHumidity(function(err, humid) {
                    temperature = temp.toFixed(4) + "F";
                    humidity = humid.toFixed(4) + "%RH";
                });
            });

            //Send data over websocket connection
            try {
                ws.send(JSON.stringify({
                    name: os.hostname(),
                    temp: temperature,
                    humid: humidity
                }));
            } catch (error) {
                console.log("Error caught while sending: " + error);
            }
        }, 1000);
    });
});

//Log errors if present
climate.on("error", function(err) {
    console.log("Error connecting climate module!", err);
});

//When ambient module is ready
ambient.on("ready", function() {
    console.log("Connected to ambient module");

    //When Websocket connection is opened
    ws.on("open", function() {
        console.log("Opened connection!");

        //Log light and sound levels every second
        var light;
        var sound;

        setInterval(function() {
            ambient.getLightLevel( function(err, ldata) {
                ambient.getSoundLevel( function(err, sdata) {
                    light = ldata,
                    sound = sdata;
                });
            });

            //Send data over websocket connection
            try {
                ws.send(JSON.stringify({
                    name: os.hostname(),
                    light: light,
                    sound: sound
                }));
            } catch (error) {
                console.log("Error caught while sending: " + error);
            }

            console.log(light);
        }, 1000);
    });
});

//Log errors if present
ambient.on("error", function(err) {
    console.log("Error connecting ambient module!", err);
});
