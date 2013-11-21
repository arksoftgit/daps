// define factories
hadapsApp.factory('hadapsApp', function($q, $http) {
    var factory = {};

    factory.processLogin = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/login.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }


    return factory;

});