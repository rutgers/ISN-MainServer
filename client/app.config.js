// app.config.js
// Author: Rutgers IEEE ISN Team

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            // the rest is the same for ui-router and ngRoute...
            url: '/home',
            template: '<isn-welcome-page></isn-welcome-page>' +
                      '<isn-monitor-panel></isn-monitor-panel>'
        });
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

module.exports = config;
