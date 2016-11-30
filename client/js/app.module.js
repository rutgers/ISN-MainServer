// app.module.js
// Author: Rutgers IEEE ISN Team

var angular = require("angular");

var firebase = require("angularfire");
var uiBootstrap = require("angular-ui-bootstrap");
var uiRouter = require("angular-ui-router");
var ngMessages = require("angular-messages");

var WelcomePage = require("./welcome-page/welcome-page.component");
var MonitorPanel = require("./monitor-panel/monitor-panel.component");

angular.module("isn-server", [firebase, uiRouter, uiBootstrap, ngMessages,
    WelcomePage.name, MonitorPanel.name
]);
