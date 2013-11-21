var hadapsApp = angular.module ('hadapsApp', ['ngRoute']);


// define routes for app
hadapsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/login',
            {
                controller: 'loginController',
                templateUrl: 'app/partials/login.php'
            })
        .when('/home',
            {
                controller: 'hadapsController',
                templateUrl: 'app/partials/home.php'
            })       
        .otherwise({redirectTo: '/login' });
});
