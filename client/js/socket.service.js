//socket.service.js
//Author: Rutgers IEEE ISN Team

angular.module("isn-server")
    .factory("Socket", Socket);

Socket.$inject = ["socketFactory"];

function Socket(socketFactory) {
    return socketFactory({
        prefix: ""
    });
}
