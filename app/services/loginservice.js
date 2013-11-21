hadapsApp.service('loginService', function () {

    this.clearLogin = function () {
        localStorage.removeItem("dapslogin");
    }

    this.addLogin = function (userid) {
        d = new Date();
        timestamp = d.getTime();

        var loginStr = "[ {"; 
        loginStr = loginStr + "\"userid\":"+userid;
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

    this.amIloggedIn = function () {
        var loginStr = this.getLogin();
        var answer = 0;

        if (loginStr != null)
            answer = 1;

        return answer;
    }

});