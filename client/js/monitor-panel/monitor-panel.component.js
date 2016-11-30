// monitor-panel.component.js
// Author: Rutgers IEEE ISN Team

module.exports = {
    templateUrl: "js/monitor-panel/monitor-panel.component.html",
    controller: MonitorPanelController,
};

MonitorPanelController.$inject = ["AuthService", "$state", "Socket"];

function MonitorPanelController(AuthService, $state, Socket) {
    var vm = this;

    Socket.on("date", function(data) {
        vm.date = data.date;
    });
    
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
