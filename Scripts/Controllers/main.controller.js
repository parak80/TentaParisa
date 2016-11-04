/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "channelApi",
        function ($scope, $location, $route, channelApi) {
            $scope.$route = $route;
            $scope.data = {
                channels: [],
                messages: [],
                favourites: [],
            }
            channelApi.getChannels()
                .then(function (data) {
                    //console.log(data);

                    if (data != null)
                        $scope.data.channels = data;
                });
            $scope.save = function () {
                var jsonString = JSON.stringify($scope.data.favourites);
                localStorage.setItem("favourites", jsonString);
            }
            $scope.load = function () {
                var dataString = localStorage.getItem("favourites");
                if (dataString)
                    $scope.data.favourites = JSON.parse(dataString);
            }
            $scope.getFavourites = function () {
                angular.forEach($scope.data.channels, function (channel) {
                    if ($scope.data.favourites.indexOf(channel.id) != -1)
                        channel.subscribed = true;
                    else
                        channel.subscribed = false;
                });
            }
            $scope.go = function (url) {
                $location.path(url);
            };
            $scope.$watch("data.channels", function () {
                $scope.load();
                $scope.getFavourites();
            });
        }
    ]);