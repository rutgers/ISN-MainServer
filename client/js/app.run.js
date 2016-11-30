//app.run.js
//Author: Rutgers IEEE ISN Team

function StateRun($rootScope, $state) {
    $rootScope.$on("$stateChangeError", function(event, toState,
        toParams, fromState, fromParams, error) {
        // We can catch the error thrown when the $requireSignIn promise is rejected
        // and redirect the user back to the home page
        if(error === "AUTH_REQUIRED") {
            $state.go("home");
        }
    });
}

// for ui-router
StateRun.$inject = ["$rootScope", "$state"];

module.exports = StateRun;
