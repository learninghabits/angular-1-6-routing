(function () {
    var controller = function ($scope, $http, $routeParams) {
        var url = 'https://api.github.com/users/' + $routeParams.login + '/repos';
        $http.get(url)
            .then(function (response) {
                $scope.repos = response.data;
            });
    };
    var app = angular.module("applicationHost"); //getting the main application module
    app.controller("ReposController", ["$scope", "$http", "$routeParams", controller]);
})();