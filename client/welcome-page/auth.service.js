//auth.service.js
//Author: Rutgers IEEE ISN Team

function AuthService($firebaseAuth) {
    return $firebaseAuth();
}

AuthService.$inject = ["$firebaseAuth"];

module.exports = AuthService;
