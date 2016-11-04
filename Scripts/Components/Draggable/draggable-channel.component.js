/// <reference path="../../angular.js" />
angular.module("mainModule")
    .component("dragChannel", {
        templateUrl: "Scripts/Components/Draggable/DraggableChannel.html",
        controller: function () {
            var scope = this;
            var component = {};

            setTimeout(function () {
                component = $("#draggable-" + scope.id);
                component.draggable({
                    grid: [5, 5],
                    cursor: "move",
                });
            });

        },
        controllerAs: "scope",
        bindings: {
            id: "<",
            name: "<"
        }
    });