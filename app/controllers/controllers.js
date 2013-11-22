// define controllers for app
var controllers = {};
controllers.hadapsParentController = function ($scope, $http, $location, loginService) {

    init();
    function init() {
        var amiloggedin = loginService.amIloggedIn();
        if (amiloggedin == 0) {
            $scope.adminusername = "None";
            $location.path("/login");
        }
        else
        {
            $scope.adminusername = loginService.getLoginUserName();
        }
    };
}

controllers.loginController = function ($scope, $http, $location, hadapsApp, loginService, dialogService) {

    init();
    function init() {
        loginService.clearLogin();

        $scope.$parent.adminusername = "None";

        $("#loginbutton").click(function () {
            // var err = validateLoginForm();
            // if (err)
            //     return false;

            var serializedData = $("#loginform").serialize();
            hadapsApp.processLogin(serializedData)
                .success( function(returnArray) {
                    if (returnArray.status == "ok")
                    {
                        loginService.addLogin(returnArray.userid,returnArray.username);
                        $location.path("/home");
                    }
                    else
                    {
                        dialogService.showDialogAlert($('#dialoglogin'),"Admin User Login Error",returnArray.text,"divLoginDisplay");
                    }
                })

                .error( function(data) {
                    $scope.messages.msg = "Failed ajax to login user";
                });

            return false
        });

    };
}

controllers.hadapsController = function ($scope, $http, $location, hadapsApp, loginService) {

    init();
    function init() {
        var amiloggedin = loginService.amIloggedIn();
        if (amiloggedin == 0) {
            $scope.$parent.adminusername = "None";
            $location.path("/login");
        }

        $scope.$parent.adminusername = loginService.getLoginUserName();


    };
}

hadapsApp.controller(controllers); 
