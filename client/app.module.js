// app.module.js
// Author: Rutgers IEEE ISN Team

var MonitorPanel = require('./monitor-panel/monitor-panel.module');

var config = require('./app.config');
var run = require('./app.run');

require('../scss/style.scss');

angular.module('isn-server', ['ui.bootstrap', 'ui.router', 'ngMessages',
    'ngWebSocket', MonitorPanel.name
])
    .run(run)
    .config(config);
