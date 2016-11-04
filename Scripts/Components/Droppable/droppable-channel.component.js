/// <reference path="../../angular.js" />
angular.module("mainModule")
    .component("dropChannel", {
        templateUrl: "Scripts/Components/Droppable/DroppableChannel.html",
        controller: function () {
            var scope = this;
            var component = {};

            setTimeout(function () {
                component = $('#dropchannel-' + scope.id);
                component.droppable({
                    drop: function (event, ui) {
                        $(this)
                          .addClass("ui-state-highlight")
                          .find("p")
                            .html("Dropped!");
                    }
                });

            });

        },
        controllerAs: "scope",
        bindings: {
            id: "<"
        }

    });