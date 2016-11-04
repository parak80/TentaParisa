/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("AdminController", [
        "$scope",
        "$routeParams",
        "channelApi",
        function ($scope, $routeParams, channelApi) {
            $scope.title = "Admin";
            $scope.newChannel = {};

            $scope.addChannel = function () {
                channelApi.addChannel($scope.newChannel)
                    .then(function (data) {
                        console.log(data)
                        $scope.data.channels.push(data);
                        $scope.newChannel = {};
                        //$scope.go("/Admin");
                    });
            }

            $scope.deleteChannel = function (id) {
                channelApi.deleteChannel(id)
                    .then(function () {
                        var index = $scope.data.channels.map(function (channel) {
                            return channel.id;
                        }).indexOf(id);
                        
                        $scope.data.channels.splice(index, 1);
                    });
            }

        }
    ]);