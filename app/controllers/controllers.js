// define controllers for app
var controllers = {};
controllers.hadapsParentController = function ($scope, $http, $location, loginService, adminfunctionService) {

    init();
    function init() {
        $scope.adminfunctions = adminfunctionService.getFunctions();
        $scope.change = function (adminfunction) {
              if (adminfunctionService.isLogoff(adminfunction.action))
                $("#quickpickdisplay").hide();

              $location.path(adminfunctionService.getActionLocation(adminfunction.action));
          }

        var amiloggedin = loginService.amIloggedIn();
        if (amiloggedin == 0) {
            $scope.adminusername = "None";
            $("#quickpickdisplay").hide();
            $location.path(adminfunctionService.getActionLocation(""));
        }
        else
        {
            $scope.adminusername = loginService.getLoginUserName();
            $("#quickpickdisplay").show();
        }
    };
}

controllers.loginController = function ($scope, $http, $location, hadapsApp, loginService, dialogService, adminfunctionService) {

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
                        // $("#quickpickdisplay").show();
                        $location.path(adminfunctionService.getActionLocation("home"));
                    }
                    else
                    {
                        dialogService.showDialogAlert($('#dialoglogin'),"Admin User Login Error",returnArray.text,"divLoginDisplay");
                    }
                })

                .error( function(data) {
                    $scope.messages.msg = "Failed ajax to login user";
                    $("#quickpickdisplay").hide();
                });

            return false
        });

    };
}

controllers.hadapsController = function ($scope, $http, $location, hadapsApp, loginService, adminfunctionService) {

    init();
    function init() {
        var amiloggedin = loginService.amIloggedIn();
        if (amiloggedin == 0) {
            $scope.$parent.adminusername = "None";
            $("#quickpickdisplay").hide();
            $location.path(adminfunctionService.getActionLocation(""));
        }
        else
        {
            $("#quickpickdisplay").show();
            $scope.$parent.adminusername = loginService.getLoginUserName();

            $scope.clienttitles = adminfunctionService.getClientTitles();
            $scope.providertitles = adminfunctionService.getProviderTitles();
            $scope.admintitles = adminfunctionService.getAdminTitles();
        }

    };
}

hadapsApp.controller(controllers); 
