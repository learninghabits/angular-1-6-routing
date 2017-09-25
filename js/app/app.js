(function () {
    var app = angular.module('applicationHost', ['ngRoute']); //-- the array is a list of dependendencies required by this application
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'js/app/main/main.html',
                controller: 'MainController'
            })
            .when('/repos/:login', {
                templateUrl : 'js/app/repos/repos.html',
                controller : 'ReposController'
            })
            .otherwise({redirectTo:'/'});
    });
})();