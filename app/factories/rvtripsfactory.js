// define factories
rvtripsApp.factory('nflteamsFactory', function($q, $http) {
    var factory = {};

    factory.getNFLTeams = function () {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getnflteams.php",
            // data: data,
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

    factory.getNFLGamesTeams = function (data) {
        var dataSeason = "season="+data;
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getnflgamesteams.php",
            data: dataSeason,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getNFLnetworks = function () {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getnetworks.php",
            // data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.updateGameInfo = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/updategameinfo.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.addGameInfo = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/addgameinfo.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getNFLTeamstats = function (data) {
        

        return $http({ 
            method: 'POST', 
            url: "app/ajax/getnflteamstats.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getNFLTeamseasons = function (data) {
        var dataSeason = "season="+data;

        return $http({ 
            method: 'POST', 
            url: "app/ajax/getnflseasons.php",
            data: dataSeason,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getNFLTeamseasonweeks = function (data) {
        var dataSeason = "season="+data;

        return $http({ 
            method: 'POST', 
            url: "app/ajax/getnflseasonweeks.php",
            data: dataSeason,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getNFLGamesWeekMemberTeams = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getnflgameweekmemberteams.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getNFLByeWeekMemberTeams = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getnflbyeweekmemberteams.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getNFLGamesWeekMemberTeamPicks = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getnflgameweekmemberteampicks.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getNFLGametypes = function () {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getnflgametypes.php",
            // data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getCurrentSeasonWeek = function () {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getcurrentseasonweek.php",
            // data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getLeaderMembers = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getleadermembers.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getMemberWeekStats = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getmemberweekstats.php",
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

    factory.getTeamWeekyRanking = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getteamweekyranking.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getAdminTeamWeeklyRanking = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getadminteamweeklyranking.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.saveAdminTeamWeeklyRanking = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/saveadminteamweeklyranking.php",
            data: data,
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

    factory.getNflTeam = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getnflteam.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getNFLpostseasonstatus = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getNFLpostseasonstatus.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.getTeamSeasonInfo = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/getteamseasoninfo.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

    factory.updateTeamSeasonInfo = function (data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/updateteamseasoninfo.php",
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