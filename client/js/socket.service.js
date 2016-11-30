//socket.service.js
//Author: Rutgers IEEE ISN Team

function Socket(socketFactory) {
    return socketFactory({
        prefix: ""
    });
}

Socket.$inject = ["socketFactory"];

module.exports = Socket;
