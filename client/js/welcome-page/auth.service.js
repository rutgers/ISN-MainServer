//auth.service.js
//Author: Rutgers IEEE ISN Team

angular.module("isn-server.welcome-page")
    .factory("AuthService", ["$firebaseAuth", function($firebaseAuth) {
        return $firebaseAuth();
    }
    ]);
