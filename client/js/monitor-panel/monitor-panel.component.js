//monitor-panel.component.js
//Author: Rutgers IEEE ISN Team

angular.module("isn-server.monitor-panel")
    .component("isnMonitorPanel", {
        templateUrl: "js/monitor-panel/monitor-panel.component.html",
        controller: MonitorPanelController
    });

MonitorPanelController.$inject = ["AuthService", "$state"];

function MonitorPanelController(AuthService, $state) {
    var vm = this;

    vm.signOut = function() {
        AuthService.$signOut();
        $state.go("home");
    };
}
