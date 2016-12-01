// monitor-panel.component.js
// Author: Rutgers IEEE ISN Team

module.exports = {
    templateUrl: "js/monitor-panel/monitor-panel.component.html",
    controller: MonitorPanelController,
};

MonitorPanelController.$inject = ["AuthService", "$state", "$websocket"];

function MonitorPanelController(AuthService, $state, $websocket) {
    var vm = this;

    var dataStream = $websocket("ws://rutgersisn.localtunnel.me");

    var message = null;

    dataStream.onMessage(function(msg) {
        message = JSON.parse(msg.data);
        console.log(message);

        vm.name = message.name;
        vm.temp = message.temp;
        vm.humid = message.humid;
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
