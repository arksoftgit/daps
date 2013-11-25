hadapsApp.service('adminfunctionService', function () {
    this.getFunctions = function () {
        return adminfunctions;
    }

    this.getActionLocation = function (action) {
        var allFunctions = this.getFunctions();

        var location = "/";
        $.each(allFunctions, function() {
            if (action == this.action)
            {
                location = "/"+this.action;             
            }
        });

        return location;
    }

    this.getClientTitles = function () {
        var allFunctions = this.getFunctions();

        var clientTitles = new Array();
        var index = 0;
        $.each(allFunctions, function() {
            if (this.owner == "client")
            {
                clientTitles[index] = this.title;
                index++;                 
            }
        });

        return clientTitles;
    }

    this.getProviderTitles = function () {
        var allFunctions = this.getFunctions();

        var providerTitles = new Array();
        var index = 0;
        $.each(allFunctions, function() {
            if (this.owner == "provider")
            {
                providerTitles[index] = this.title;
                index++; 
            }

        });

        return providerTitles;
    }

    this.getAdminTitles = function () {
        var allFunctions = this.getFunctions();

        var adminTitles = new Array();
        var index = 0;
        $.each(allFunctions, function() {
            if (this.owner == "admin")
            {
                adminTitles[index] = this.title;
                index++;                 
            }
        });

        return adminTitles;
    }

    this.isLogoff = function (action) {
        if (action == adminfunctions[0].action)
            return true;
        else
            return false;
    }

    var adminfunctions = [
        {
            title: "Logout",
            action: "login",
            owner: "user"
        },
        {
            title: "Service Center",
            action: "home",
            owner: "user"
        },
        {
            title: "Setup Client",
            action: "setupclient",
            owner: "client"
        },
        {
            title: "Setup Provider",
            action: "setupprovider",
            owner: "provider"
        },
        {
            title: "Gather Information",
            action: "informationgather",
            owner: "client"
        },
        {
            title: "Client Information",
            action: "informationclient",
            owner: "client"
        },
        {
            title: "Provider Information",
            action: "informationprovider",
            owner: "provider"
        },
        {
            title: "Request Information",
            action: "informationrequest",
            owner: "provider"
        },
        {
            title: "Administration",
            action: "admin",
            owner: "admin"
        }
    ];

});