var hadapsApp = angular.module ('hadapsApp', ['ngRoute','ngAnimate']);


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
        .when('/clientsetup',
            {
                controller: 'clientsetupController',
                templateUrl: 'app/partials/clientsetup.php'
            })       
        .otherwise({redirectTo: '/login' });
});

// hadapsApp.animation('.view-animate', function() {
//   return {
//     enter: function(element, done) {
//       //run the animation here and call done when the animation is complete
//       return function(cancelled) {
//         //this (optional) function will be called when the animation
//         //completes or when the animation is cancelled (the cancelled
//         //flag will be set to true if cancelled).
//       }
//     },
//     leave: function(element, done) { },
//     move: function(element, done) { },
 
//     //animation that can be triggered before the class is added
//     beforeAddClass: function(element, className, done) { },
 
//     //animation that can be triggered after the class is added
//     addClass: function(element, className, done) { },
 
//     //animation that can be triggered before the class is removed
//     beforeRemoveClass: function(element, className, done) { },
 
//     //animation that can be triggered after the class is removed
//     removeClass: function(element, className, done) { }
//   }
// });

