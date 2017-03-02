rvtripsApp.service('loginService', function () {
    this.setLoginLogoffLabel = function(labelid, action) {
        var login = this.getLogin();

        // get the text for login title
        var logintext = this.getLoginLogoffLabels();

        var location = "";

        if (login == null)
        {
            $("#"+labelid).text(logintext.login.text);
            if (action)
                location = "/login";
        }
        else
        {
            
            if (action)
            {
                this.removeLogin();
                $("#"+labelid).html(logintext.login.text);
                location = "/home";
            }
            else
            {
                $("#"+labelid).html(login.screenname+"<br /> "+logintext.logoff.text);
            }
        } 

        return location;
    }

    this.setAvatarLabel = function(labelid, action) {
        var login = this.getLogin();

        if (login == null)
        {
            $("#"+labelid).text("");
        }
        else
        {
            if (action)
            {
                $("#"+labelid).text("");
            }
            else
            {
                $("#"+labelid).text(login.screenname);
            }
        } 
    }

    this.getLoginLogoffLabels = function() {
        var labels = loginLogoffService;

        return labels;
    }

    this.isLoggedIn = function() {
        var login = this.getLogin();
        if (login == null)
            return false
        else
            return true;
    }

    this.getMemberRole = function() {
        var role = "";
        var login = "";

        var login = this.getLogin();
        if (login != null)
        {
            var role = login.role;
        }
        

        return role;
    }

    this.getMemberAvatar= function() {
        var memberavatar = "";
        var login = "";

        var login = this.getLogin();
        if (login != null)
        {
            var memberavatar = login.avatar;
        }
        

        return memberavatar;
    }

    this.getEmptyLogin = function() {
        var login = emptyLogin;

        return login;
    }

    this.getLogin = function() {
        var loginStr = this.retreiveLogin();
        var login = JSON.parse(loginStr);

        return login;
    }

    this.addLogin = function(login) {
        // var login ="";

        var loginStr = JSON.stringify(login);
        this.saveLogin(loginStr);

        return login;
    }

    this.saveLogin = function (loginStr) {
        localStorage.removeItem("dddLogin");
        localStorage.setItem("dddLogin", loginStr);
    }

    this.retreiveLogin = function () {
        var loginStr = localStorage.getItem("dddLogin");

        return loginStr;
    }

    this.removeLogin = function () {
        localStorage.removeItem("dddLogin");
    }

    var emptyLogin = [
        {  }
    ];

    var loginLogoffService = 
        {
            "login" : 
                {
                    "text": "Login"
                }, 
            "logoff" : 
                {
                    "text": "Logoff"
                }   
        };
});