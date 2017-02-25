// app.module.js
// Author: Rutgers IEEE ISN Team

var WelcomePage = require("./welcome-page/welcome-page.module");
var MonitorPanel = require("./monitor-panel/monitor-panel.module");

var config = require("./app.config");
var run = require("./app.run");

require("../scss/style.scss");

angular.module("isn-server", ["firebase", "ui.router", "ngMessages", "ngWebSocket",
    WelcomePage.name, MonitorPanel.name
])
    .run(run)
    .config(config);
