hadapsApp.service('loginService', function () {

    this.clearLogin = function () {
        localStorage.removeItem("dapslogin");
    }

    this.addLogin = function (userid,username) {
        d = new Date();
        timestamp = d.getTime();

        var loginStr = "[ {"; 
        loginStr = loginStr + "\"userid\":\""+userid;
        loginStr = loginStr + "\",\"username\":\""+username;        
        loginStr = loginStr + "\",\"timestamp\":\""+timestamp;
        loginStr = loginStr+"\"} ]";

        this.saveLogin(loginStr);
    }

    this.saveLogin = function (jsonStr) {
        this.clearLogin();
        localStorage.setItem("dapslogin", jsonStr);
    }

    this.getLogin = function () {
        var loginStr = localStorage.getItem("dapslogin");

        return loginStr;
    }

    this.getLoginUserName = function () {
        var username = "";

        var str = this.getLogin();
        if (str != "" && str != null)
        {
            var loginStr = JSON.parse(str);
            $.each(loginStr, function() {
                username = this.username; 
            });
        }
        
        return username;
    }

    this.amIloggedIn = function () {
        var loginStr = this.getLogin();
        var answer = 0;

        if (loginStr != null)
            answer = 1;

        return answer;
    }

});