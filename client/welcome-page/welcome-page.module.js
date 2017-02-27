// welcome-page.module.js
// Author: Rutgers IEEE ISN Team

var AuthService = require('./auth.service');
var WelcomePageComponent = require('./welcome-page.component');

module.exports = angular.module('isn-server.welcome-page', [])
    .component('isnWelcomePage', WelcomePageComponent)
    .factory('AuthService', AuthService);
