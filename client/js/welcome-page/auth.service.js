//auth.service.js
//Author: Rutgers IEEE ISN Team

angular.module("isn-server.welcome-page")
    .factory("AuthService", AuthService);

AuthService.$inject = ["$firebaseAuth"];

function AuthService($firebaseAuth) {
    return $firebaseAuth();
}
