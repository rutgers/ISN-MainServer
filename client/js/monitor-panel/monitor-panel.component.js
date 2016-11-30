// monitor-panel.component.js
// Author: Rutgers IEEE ISN Team

module.exports = {
    templateUrl: "js/monitor-panel/monitor-panel.component.html",
    controller: MonitorPanelController,
};

MonitorPanelController.$inject = ["AuthService", "$state"];

function MonitorPanelController(AuthService, $state) {
    var vm = this;

    vm.signoutUser = function() {
        AuthService.$signOut()
            .then(function() {
                console.log("Signed Out");
                $state.go("home");
            })
            .catch(function(error) {
                console.error(error);
            });
    };
}
