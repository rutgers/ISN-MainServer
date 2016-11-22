// welcome-page.module.js
// Author: Rutgers IEEE ISN Team

var angular = require("angular");

var MonitorPanelComponent = require("./monitor-panel.component");

module.exports = angular.module("isn-server.monitor-panel", [])
    .component("isnMonitorPanel", MonitorPanelComponent);
