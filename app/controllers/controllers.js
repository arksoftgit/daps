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

            $scope.sysfuncs = adminfunctionService.getAllFunctions();
        }
    };

    $scope.showHideInfo = function (action, elm)
    {
        var path = "app/load/"+elm.sysfunc.action+".html";

        if (action == "show")
        {
            $("#infoarea").load(path);

            $("#infoarea").css("display","block");
        }
        else if (action == "hide")
        {
            $("#infoarea").css("display","none");
        }

    };

}

controllers.clientsetupController = function ($scope, $http, $location, hadapsApp, loginService, adminfunctionService) {

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

            //
            // this wll display payment choice
            //
            $("input[name='paymentmethod']").change(function() {
                var choice = this.value;
                switch (choice)
                {
                    case "cc":
                        $("#creditacardpaymentchoice").css("display","block");
                        $("#paypalpaymentchoice").css("display","none");
                        $("#invoicepaymentchoice").css("display","none");
                        break;

                    case "pp":
                        $("#creditacardpaymentchoice").css("display","none");
                        $("#paypalpaymentchoice").css("display","block");
                        $("#invoicepaymentchoice").css("display","none");
                        break;

                    case "in":
                        $("#creditacardpaymentchoice").css("display","none");
                        $("#paypalpaymentchoice").css("display","none");
                        $("#invoicepaymentchoice").css("display","block");
                        break;

                }
            });

            //
            // this will call ajax routine to save clinet information
            //
            $("#clientsetupprocess").click(function () {
                alert("We are clicked clientsetupprocess");
                // var err = validateShippingForm();
                // if (err)
                //     return false;

                // var serializedData = $("#shipping").serialize();
                // cultivatedmooseApp.addShoppingCartItem(serializedData)
                //     .success( function(msgArray) {
                //         //
                //         // after we save and validate we send pappal
                //         // whatever it needs
                //         //
                //         if (msgArray.status == "ok")
                //         {
                            
                //         }
                //         else
                //         {
                //             alert(msgArray.text); 
                //         }
                //     })

                //     .error( function(data) {
                //         $scope.messages.msg = "Failed ajax to add items";
                //     });

                // return false
            });
            
        } // end of else on init

    };
}

hadapsApp.controller(controllers); 
