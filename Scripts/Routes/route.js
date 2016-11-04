/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("mainModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

                .when("/", {
                    templateUrl: "Views/Channels.html",
                    controller: "ChannelsController",
                    caseInsensitiveMatch: true,
                    activeTab: "Channels"
                })
                  .when("/Admin", {
                      templateUrl: "Views/Admin.html",
                      controller: "AdminController",
                      caseInsensitiveMatch: true,
                      activeTab: "Admin"
                  })

                 .when("/Channels/:id", {
                     templateUrl: "Views/Messages.html",
                     controller: "ChannelController",
                     caseInsensitiveMatch: true,
                     activeTab: "Channels"
                 })
                .when("/Favourites", {
                    templateUrl: "Views/Favourite.html",
                    controller: "FavouriteController",
                    caseInsensitiveMatch: true,
                    activeTab: "Favourites"
                });
        }
    ]);