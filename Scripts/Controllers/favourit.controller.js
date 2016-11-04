/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("FavouriteController", [
        "$scope",
        function ($scope) {
            $scope.title = "Favourites";
            $scope.getFavourites();

            $scope.unsubscribe = function (channelId) {
                var myChannel = $scope.data.favourites.indexOf(channelId)
                $scope.data.favourites.splice(myChannel, 1);

                $scope.getFavourites();
                $scope.save();
                
            }
            
        }
    ]);