angular.module("mainModule")
    .service("channelApi", [
        "$http",
        "$q",
            function ($http, $q) {
                var api = "http://dummyapi.kodalagom.se/api";
                var channels = api + "/channels";
                var messages = api + "/messages";

                this.getChannels = function () {
                    var deferred = $q.defer();
                    $http.get(channels)
                        .then(function (response) {
                            this.channels = response.data;
                            deferred.resolve(response.data);
                        }, function (response) {
                            deferred.resolve([]);
                        });

                    return deferred.promise;
                }

                this.addChannel = function (newChannel) {
                    var deferred = $q.defer();
                    $http.post(channels, newChannel)
                        .then(function (response) {
                            deferred.resolve(response.data);
                        }, function (response) {
                            deferred.resolve([]);
                        });

                    return deferred.promise;
                }

                this.getMessages = function () {
                    var deferred = $q.defer();
                    $http.get(messages)
                        .then(function (response) {
                            this.messages = response.data;
                            deferred.resolve(response);
                        }, function () {
                            deferred.resolve([]);
                        });

                    return deferred.promise;
                }

                this.deleteChannel = function (id) {
                    var deferred = $q.defer();
                    $http.delete(channels + "/" + id)
                        .then(function (response) {
                            deferred.resolve();
                        }, function (response) {
                            deferred.resolve();
                        });

                    return deferred.promise;
                }
                this.postMessage = function (newMessage) {
                    var deferred = $q.defer();
                    $http.post(messages , newMessage)
                        .then(function (response) {
                            this.channels = response;
                            deferred.resolve(response.data);
                        }, function (response) {
                            deferred.resolve();
                        });

                    return deferred.promise;
                }
            }
    ]);
