/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("ChannelsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Channels";

            $scope.subscribe = function (channelId) {
                if ($scope.data.favourites.indexOf(channelId) == -1)
                    $scope.data.favourites.push(channelId);

                $scope.getFavourites();
                $scope.save();
            }
        }
    ]);