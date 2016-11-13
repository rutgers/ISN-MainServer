// app.module.js
// Author: Rutgers IEEE ISN Team

angular.module("isn-server", ["firebase", "ui.router",
    "isn-server.welcome-page", "isn-server.monitor-panel",
    "btford.socket-io"
]);
