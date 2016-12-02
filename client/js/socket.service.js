//socket.service.js
//Author: Rutgers IEEE ISN Team

function Socket($websocket) {
    // var dataStream = $websocket("ws://localhost:8080");
    //
    // var message = null;
    //
    // dataStream.onMessage(function(msg) {
    //     message = JSON.parse(msg.data);
    //     console.log(message);
    // });
    //
    // return {
    //     date: message.date,
    //     temp: message.temp,
    //     humid: message.humid
    // };
}

Socket.$inject = ["$websocket"];

module.exports = Socket;
