// define factories
rvtripsApp.factory('tripFactory', function($q, $http) {
    var factory = {};

    factory.addmemberTrip = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/addmembertrip.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.updatememberTrip = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/updatemembertrip.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getcurrentmemberTrip = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getcurrentmembertrip.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.deletememberTrip = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/deletemembertrip.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getmembertypeaheadTrip = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getmembertriptypeahead.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getmemberTrip = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getmembertrip.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.updateTeamInfo = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/updateteaminfo.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getNow = function () {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getnow.php",
            // data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getTeamStandingsDialog = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getteamstatsdialog.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getNFLrss = function () {
        return $http({ 
            type: 'POST', 
            url: "app/ajax/getnflrss.php",
            // data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    return factory;
});

rvtripsApp.factory('membersFactory', function($q, $http) {
    var factory = {};

    factory.getMembers = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getmembers.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getMember = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getmember.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getMemberProfileDialog = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getmemberprofiledialog.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getAllMembers = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getallmembers.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getAllMember = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getallmember.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.addMember = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/addmember.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.addMemberGroup = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/addmembergroup.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getAllMemberGroups = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getallmembergroups.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getAllMemberGroup = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getallmembergroup.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.updateMemberGroup = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/updatemembergroup.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.deleteMemberGroup = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/deletemembergroup.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }
    factory.getAllMemberGroupMembers = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getallmembergroupmembers.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.buildeMailTemplate = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/buildemail.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.updateMember = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/updatemember.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.memberUpdateMember = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/memberupdatemember.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.deleteMember = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/deletemember.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.saveMemberAvatar = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/savememberavatar.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.addMemberGameTeamPick = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/addmembergameteampick.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.sendeMail2Members = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/sendemail2members.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getLatePickMembers = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getlatepickmembers.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getLatePickDayOfMembers = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getlatepickdayofmembers.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    return factory;
});


rvtripsApp.factory('keyrequestsFactory', function($q, $http) {
    var factory = {};

    factory.getkeyrequestItems = function () {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getkeyrequestitems.php",
            // data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    return factory;
});

rvtripsApp.factory('temploginFactory', function($q, $http) {
    var factory = {};

    factory.changeTempPassword = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/changetemppassword.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    return factory;
});

rvtripsApp.factory('loginFactory', function($q, $http) {
    var factory = {};

    factory.loginPassword = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/login.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    return factory;
});

rvtripsApp.factory('scriptsFactory', function($q, $http) {
    var factory = {};

    factory.initializeTeamWeekStats = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/initializeteamweekstats.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.initializeMemberWeekStats = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/initializememberweekstats.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.buildTeamStats = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/buildteamstats.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.buildTeamWeekStats = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/buildteamweekstats.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.buildMemberStats = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/buildmemberstats.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.buildMemberWeekStats = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/buildmemberweekstats.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.buildMySqlDump = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/buildmysqldump.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.importTeamWeeklyRankFile = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/importteamweeklyrankfile.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.runPhpModule = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/runphpmodule.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    return factory;
});