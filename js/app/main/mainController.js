(function () {
    var controller = function ($scope, $http, $location) {
        $http.get("https://api.github.com/users/learninghabits")
            .then(function (response) {
                //use $scope to assign a model
                //$scope.user = response.data; -- binds all properties to user.
                var user = {
                    login: response.data.login,
                    avatar_url: response.data.avatar_url,
                    name: response.data.name
                };
                $scope.user = user;
                $scope.gotoRepos = function (login) {
                    $location.url('/repos/' + login);
                }
            });
    };
    var app = angular.module("applicationHost"); //getting the main application module
    app.controller('MainController', ['$scope', '$http', '$location', controller]);
})();