// monitor-panel.component.js
// Author: Rutgers IEEE ISN Team

angular.module("isn-server.monitor-panel")
    .component("isnMonitorPanel", {
        templateUrl: "js/monitor-panel/monitor-panel.component.html",
        controller: MonitorPanelController,
    });

MonitorPanelController.$inject = ["AuthService"];



function MonitorPanelController(AuthService) {
        var vm= this;

   vm.signoutUser = function() {

      AuthService.$signOut()

      .then(function() {
        console.log('Signed Out');
      },
      (function(error) {
        console.error(error);
      });
  }
}
