//app.config.js
//Author: Rutgers IEEE ISN Team

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state("home", {
            // the rest is the same for ui-router and ngRoute...
            url: "/home",
            template: "<isn-welcome-page></isn-welcome-page>",
            resolve: {
                // controller will not be loaded until $waitForSignIn resolves
                // Auth refers to our $firebaseAuth wrapper in the factory below
                "currentAuth": ["AuthService", function(
                    AuthService) {
                    // $waitForSignIn returns a promise so the resolve waits for it to complete
                    return AuthService.$waitForSignIn();
                }]
            }
        })
        .state("account", {
            // the rest is the same for ui-router and ngRoute...
            url: "/account",
            template: "<isn-monitor-panel></isn-monitor-panel>",
            resolve: {
                // controller will not be loaded until $requireSignIn resolves
                // Auth refers to our $firebaseAuth wrapper in the factory below
                "currentAuth": ["AuthService", function(
                    AuthService) {
                    // $requireSignIn returns a promise so the resolve waits for it to complete
                    // If the promise is rejected, it will throw a $stateChangeError (see above)
                    return AuthService.$requireSignIn();
                }]
            }
        });
}

config.$inject = ["$stateProvider", "$urlRouterProvider"];

module.exports = config;
