// define controllers for app
var controllers = {};
controllers.loginController = function ($scope, $http, $location, hadapsApp, loginService, dialogService) {

    init();
    function init() {
        loginService.clearLogin();

        $("#loginbutton").click(function () {
            // var err = validateLoginForm();
            // if (err)
            //     return false;

            var serializedData = $("#loginform").serialize();
            hadapsApp.processLogin(serializedData)
                .success( function(returnArray) {
                    //
                    // after we save and validate we send pappal
                    // whatever it needs
                    //
                    if (returnArray.status == "ok")
                    {
                        loginService.addLogin(returnArray.userid);
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
            $location.path("/login");
        }

    };
}

hadapsApp.controller(controllers); 
