/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("ChannelController", [
        "$scope",
        "$routeParams",
        "$rootScope",
        "Hub",
        "channelApi",
        function ($scope, $routeParams, $rootScope, Hub, channelApi) {

            $scope.newMessage = {};


            var signalrPath = 'http://dummyapi.kodalagom.se/signalr';
            var hub = new Hub('chatHub', {

                rootPath: signalrPath,
                listeners: {
                    'recieveMessage': function (message) {
                        $rootScope.message = message;
                        angular.forEach($scope.data.channels, function (channel) {
                            channel.messages.push(message);
                        });
                        $rootScope.$apply();
                    }
                },

                errorHandler: function (error) {
                    console.error(error);
                },

                stateChanged: function (state) {
                    switch (state.newState) {
                        case $.signalR.connectionState.connecting:
                            console.log("signalR.connectionState.connecting" + state.newState);
                            break;
                        case $.signalR.connectionState.connected:
                            console.log("signalR.connectionState.connected" + state.newState);
                            break;
                        case $.signalR.connectionState.reconnecting:
                            console.log("signalR.connectionState.reconnecting" + state.newState);
                            break;
                        case $.signalR.connectionState.disconnected:
                            console.log("signalR.connectionState.disconnected" + state.newState);
                            break;
                    }
                }

            });

            $scope.channel = $scope.data.channels.filter(function (channel) {
                return channel.id == $routeParams.id;
            })[0];

            $scope.postMessage = function () {
                $scope.newMessage.channelId = $routeParams.id;
                channelApi.postMessage($scope.newMessage)
                    .then(function (data) {
                        $scope.data.messages.push(data);
                        //$scope.newMessage = {};
                    });
            }
            $scope.getFavourites();
        }

    ]);