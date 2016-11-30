// welcome-page.component.js
// Author: Jeremy Savarin

module.exports = {
    templateUrl: "js/welcome-page/welcome-page.component.html",
    controller: WelcomePageController,
};

WelcomePageController.$inject = ["AuthService", "$state", "Socket"];

function WelcomePageController(AuthService, $state, Socket) {
    var vm = this;

    vm.toggle = true;

    vm.loginEmail = "";
    vm.loginPassword = "";

    vm.signupEmail = "";
    vm.signupPassword = "";
    vm.confirmPassword = "";

    Socket.emit("loaded", {
        message: "Welcome page loaded!"
    });

    Socket.on("date", function(data) {
        vm.date = data.date;
    });

    //function for toggle, one for login, one for sign in
    vm.toggleLogin = function() {
        vm.toggle = !vm.toggle;
    };

    // login the user
    vm.loginUser = function() {
        AuthService.$signInWithEmailAndPassword(vm.loginEmail, vm.loginPassword)
            .then(function(authUser) {
                console.log("User logged in with user id:" + authUser.uid);
                vm.loginEmail = "";
                vm.loginPassword = "";
                $state.go("account");
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    //sign up for the user
    vm.signupUser = function() {
        // accounts for when signup password doesnt match the confirm password
        if (vm.signupPassword !== vm.confirmPassword) {
            console.log("Passwords don't match");
            return;
        }

        AuthService.$createUserWithEmailAndPassword(vm.signupEmail, vm.signupPassword)
            .then(function(authUser) {
                console.log("User created with user id:" + authUser.uid);
                vm.signupEmail = "";
                vm.signupPassword = "";
                vm.confirmPassword = "";
            })
            .catch(function(error) {
                console.log(error);
            });
    };
}
