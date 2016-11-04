angular.module("mainModule")
    .directive("favouriteButton", [
        function () {
            return {
                restrict: "E",
                scope: {
                    subscribed: "=ngModel",
                },
                templateUrl: "Scripts/Directives/FavouriteButton/FavouritedButton.html",
            }
        }

    ]);