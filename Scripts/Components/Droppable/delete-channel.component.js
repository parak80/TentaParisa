/// <reference path="../../angular.js" />
angular.module("mainModule")
    .component("deleteChannel", {
        templateUrl: "Scripts/Components/Droppable/DeleteChannel.html",
        controller: function () {
            var scope = this;
            var component = {};

            setTimeout(function () {
                component = $("#deletechannel-" + scope.id);
                component.droppable({
                    hoverClass: "delete-channel-hover",
                    drop: function (event, ui) {
                        if (confirm('Are you sure you want to delete this channel?')) {
                            ui.draggable.remove();
                        } else {
                            ui.draggable.show();
                        }
                        var element = ui.draggable.css('position', '');
                        $(this).append(element);
                        $(ui.draggable).hide();
                    },
                });
            });
        },
        controllerAs: "scope",
        bindings: {
            id: "<"
        }
    });