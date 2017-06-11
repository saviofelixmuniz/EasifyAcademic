var HOME_PAGE = 'templates/pages/home/home.html';

var HOME_CONTROLLER = 'HomeCtrl';

angular.module('academic')
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: 'home'
        })
        .when('/home',  {
            templateUrl: HOME_PAGE,
            controller: HOME_CONTROLLER
        })
        .otherwise({
            redirectTo: 'home'
        })
});