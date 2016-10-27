//welcome-page.component.js
//Author: Jeremy Savarin

angular.module("isn-server.welcome-page")
    .component("isnWelcomePage", {
        templateUrl: "js/welcome-page/welcome-page.component.html",
        controller: WelcomePageController
    });

WelcomePageController.$inject = ["AuthService", "$state"];

function WelcomePageController(AuthService, $state) {
    var vm = this;

    //Toggle login or signup screen
    vm.showLogin = true;

    //Login form info
    vm.loginEmail = "";
    vm.loginPassword = "";

    //Signup form info
    vm.signupEmail = "";
    vm.signupPassword = "";
    vm.confirmPassword = "";

    vm.toggleLogin = function() {
        vm.showLogin = !vm.showLogin;
    };

    vm.signupUser = function() {
        if (vm.signupPassword !== vm.confirmPassword) {
            console.log("Passwords do not match!");
            return;
        }

        AuthService.$createUserWithEmailAndPassword(vm.signupEmail, vm.signupPassword)
            .then(function(authUser) {
                console.log("User created with user id:" + authUser.uid);
                vm.signupEmail = "";
                vm.signupPassword = "";
                vm.confirmPassword = "";
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    vm.loginUser = function() {
        AuthService.$signInWithEmailAndPassword(vm.loginEmail, vm.loginPassword)
            .then(function(authUser) {
                console.log("User logged in with user id:" + authUser.uid);
                vm.loginEmail = "";
                vm.loginPassword = "";
                $state.go("account");
            })
            .catch(function(err) {
                console.log(err);
            });
    };
}
