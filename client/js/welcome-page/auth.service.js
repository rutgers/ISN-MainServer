angular.module("isn-server.welcome-page")

.factory("AuthService", ["$firebaseAuth",
  function($firebaseAuth) {
      return $firebaseAuth();
  }
]);

