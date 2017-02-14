// app.module.js
// Author: Rutgers IEEE ISN Team

var angular = require("angular");

var chartjs = require("angular-chart.js");
var ngMessages = require("angular-messages");
var uiRouter = require("angular-ui-router");
var firebase = require("angularfire");

var WelcomePage = require("./welcome-page/welcome-page.module");
var MonitorPanel = require("./monitor-panel/monitor-panel.module");

var config = require("./app.config");
var run = require("./app.run");

require("chart.js");
require("../../scss/style.scss");

angular.module("isn-server", [chartjs, firebase, uiRouter, ngMessages, "ngWebSocket",
    WelcomePage.name, MonitorPanel.name
])
    .run(run)
    .config(config);
