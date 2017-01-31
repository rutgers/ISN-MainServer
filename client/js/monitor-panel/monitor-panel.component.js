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
    var tessel1 = null;
    var tessel2 = null;
    var tessel3 = null;

    dataStream.onMessage(function(msg) {
        message = JSON.parse(msg.data);
        console.log(message);

        if (message.name === "Kumquat") {
            vm.kname = message.name;
            vm.ktemp = message.temp;
            vm.khumid = message.humid;
        } else if (message.name === "IEEE") {
            vm.iname = message.name;
            vm.itemp = message.temp;
            vm.ihumid = message.humid;
        } else if (message.name === "MrPresident") {
            vm.pname = message.name;
            vm.ptemp = message.temp;
            vm.phumid = message.humid;
        }
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
