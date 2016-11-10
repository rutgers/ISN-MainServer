//app.config.js
//Author: Rutgers IEEE ISN Team

// for ui-router
angular.module("isn-server")
    .run(["$rootScope", "$state", function($rootScope, $state) {
        $rootScope.$on("$stateChangeError", function(event, toState,
            toParams, fromState, fromParams, error) {
            // We can catch the error thrown when the $requireSignIn promise is rejected
            // and redirect the user back to the home page
            if (error === "AUTH_REQUIRED") {
                $state.go("home");
            }
        });
    }])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
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
    }]);
