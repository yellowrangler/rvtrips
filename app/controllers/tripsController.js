controllers.addmembertripController = function ($scope, $http, $location, loginService, rvtripsService, tripFactory) {
    var loggedIn = loginService.isLoggedIn();
    if (!loggedIn)
    {
        alert ("You must login!")
        $location.path("#home");
    }

    function formValidation() 
    {
        var tripname = $("#tripname").val();
        var tripdescription = $("#tripdescription").val();
        var tripstartdate = $("#tripstartdate").val();
        var tripenddate = $("#tripenddate").val();

        var error = 0,
            fieldsinerrorArray = [];
         

        if (tripname == "")
        {
            fieldsinerrorArray[error] = "Trip Name";
            error = error + 1;
        }

        if (tripdescription == "")
        {
            fieldsinerrorArray[error] = "Trip Description";
            error = error + 1;
        }
        if (tripstartdate == "")
        {
            fieldsinerrorArray[error] = "Trip Start Date";
            error = error + 1;
        }

        if (tripenddate == "")
        {
            fieldsinerrorArray[error] = "Trip End Date";
            error = error + 1;
        }

        if (error > 0)
        {
            var errmsg = "You have the following fields in error: ";
            for (var i = 0; i < fieldsinerrorArray.length; i++)
            {
                if (i < fieldsinerrorArray.length)
                    errmsg = errmsg + fieldsinerrorArray[i] + ", ";
                else
                    errmsg = errmsg + fieldsinerrorArray[i] + ".";
            }

            $scope.$parent.showAlert("Validation Error", errmsg);
        }

        return error;
    }

    function addmembertrip() 
    {
        var error = formValidation();
        if (error)
        {
            // new code
            return false;
        }

        var formstring = $("#addmembertripForm").serialize();

        // alert(formstring);
        var formstringClean = encodeURIComponent(formstring);

        tripFactory.addmemberTrip(formstring)
        .success( function(data) {
            if (data !== "ok")
            {
                $scope.$parent.showAlert("Error adding Trip", data);
                // alert("Error adding Trip - "+data);
            }
            else
            {
                $scope.$parent.showAlert("Success", "Trip added succesfully!");
                // alert("Trip added succesfully!");
                $("#addmembertripForm")[0].reset();
            }

        })
        .error( function(edata) {
            alert(edata);
        });
    }

    init();
    function init() {
        $scope.current = {};
        $scope.current.trip = {};

        //
        // get current memberid
        //
        $scope.current.memberlogin = loginService.getLogin();
        $scope.current.memberid = $scope.current.memberlogin.memberid;

    };

    $scope.addmembertrip = function() {
        addmembertrip();
    };
}

controllers.managemembertripController = function ($scope, $http, $location, loginService, rvtripsService, tripFactory) {
    var loggedIn = loginService.isLoggedIn();
    if (!loggedIn)
    {
        alert ("You must login!")
        $location.path("#home");
    }

    function formValidation() 
    {
        var tripname = $("#tripname").val();
        var tripdescription = $("#tripdescription").val();
        var tripstartdate = $("#tripstartdate").val();
        var tripenddate = $("#tripenddate").val();

        var error = 0,
            fieldsinerrorArray = [];

        if (tripname == "")
        {
            fieldsinerrorArray[error] = "Trip Name";
            error = error + 1;
        }

        if (tripdescription == "")
        {
            fieldsinerrorArray[error] = "Trip Description";
            error = error + 1;
        }
        if (tripstartdate == "")
        {
            fieldsinerrorArray[error] = "Trip Start Date";
            error = error + 1;
        }

        if (tripenddate == "")
        {
            fieldsinerrorArray[error] = "Trip End Date";
            error = error + 1;
        }

        if (error > 0)
        {
            var errmsg = "You have the following fields in error: ";
            for (var i = 0; i < fieldsinerrorArray.length; i++)
            {
                if (i < fieldsinerrorArray.length)
                    errmsg = errmsg + fieldsinerrorArray[i] + ", ";
                else
                    errmsg = errmsg + fieldsinerrorArray[i] + ".";
            }

            $scope.$parent.showAlert("Validation Error", errmsg);
        }

        return error;
    }

    function updatemembertrip() 
    {
        var error = formValidation();
        if (error)
        {
            // new code
            return false;
        }

        var formstring = $("#managemembertripForm").serialize();

        // alert(formstring);
        var formstringClean = encodeURIComponent(formstring);

        tripFactory.updatememberTrip(formstring)
        .success( function(data) {
            if (data !== "ok")
            {
                $scope.$parent.showAlert("Error updating Trip", data);
                // alert("Error updating Trip - "+data);
            }
            else
            {
                $scope.$parent.showAlert("Success", "Trip updated succesfully!");
                // alert("Trip updating succesfully!");
                getMemberTripList($scope.current.memberid);
            }

        })
        .error( function(edata) {
            alert(edata);
        });
    }

    function deletemembertrip() 
    {
        var formstring = $("#managemembertripForm").serialize();

        // alert(formstring);
        var formstringClean = encodeURIComponent(formstring);

        tripFactory.deletememberTrip(formstring)
        .success( function(data) {
            if (data !== "ok")
            {
                $scope.$parent.showAlert("Error deleting Trip", data);
                // alert("Error adding Trip - "+data);
            }
            else
            {
                $scope.$parent.showAlert("Success", "Trip deleted succesfully!");
                // alert("Trip added succesfully!");
                $("#managemembertripForm")[0].reset();

                getMemberTripList($scope.current.memberid);
            }

        })
        .error( function(edata) {
            alert(edata);
        });
    }

    function getMemberTrip (membertripid) 
    {
        $scope.current.trip = {};

        // alert (membertripid);
        var data = "memberid="+ $scope.current.memberid+"&membertripid="+membertripid;
        tripFactory.getmemberTrip(data)
        .success( function(data) {
            $(data).each(function()  {
                this.tripstartdate = new Date(this.tripstartdate);
                this.tripenddate = new Date(this.tripenddate); 
            });

            $scope.current.trip = data;
        })
        .error( function(edata) {
            alert(edata);
        });
    }

    function getMemberTripList(memberid)
    {
        //
        // get list for select
        //
        var data = "memberid="+ memberid;
        tripFactory.getmembertypeaheadTrip(data)
        .success( function(data) {
            $scope.membertrips = data;
        })
        .error( function(edata) {
            alert(edata);
        });
    }

    init();
    function init() {
        $scope.current = {};
        $scope.current.trip = {};

        //
        // get current memberid
        //
        $scope.current.memberlogin = loginService.getLogin();
        $scope.current.memberid = $scope.current.memberlogin.memberid;

        getMemberTripList($scope.current.memberid);
    };

    $scope.getMemberTrip = function(membertripid) {
        getMemberTrip(membertripid);
    };

    $scope.updatemembertrip = function() {
        updatemembertrip();
    };

    $scope.deletemembertrip = function() {
        deletemembertrip();
    };
}

controllers.currentmembertripController = function ($scope, $http, $location, loginService, rvtripsService, tripFactory) {
    var loggedIn = loginService.isLoggedIn();
    if (!loggedIn)
    {
        alert ("You must login!")
        $location.path("#home");
    }

    function formValidation() 
    {
        var tripname = $("#tripname").val();
        var tripdescription = $("#tripdescription").val();
        var tripstartdate = $("#tripstartdate").val();
        var tripenddate = $("#tripenddate").val();

        var error = 0,
            fieldsinerrorArray = [];

        if (tripname == "")
        {
            fieldsinerrorArray[error] = "Trip Name";
            error = error + 1;
        }

        if (tripdescription == "")
        {
            fieldsinerrorArray[error] = "Trip Description";
            error = error + 1;
        }
        if (tripstartdate == "")
        {
            fieldsinerrorArray[error] = "Trip Start Date";
            error = error + 1;
        }

        if (tripenddate == "")
        {
            fieldsinerrorArray[error] = "Trip End Date";
            error = error + 1;
        }

        if (error > 0)
        {
            var errmsg = "You have the following fields in error: ";
            for (var i = 0; i < fieldsinerrorArray.length; i++)
            {
                if (i < fieldsinerrorArray.length)
                    errmsg = errmsg + fieldsinerrorArray[i] + ", ";
                else
                    errmsg = errmsg + fieldsinerrorArray[i] + ".";
            }

            $scope.$parent.showAlert("Validation Error", errmsg);
        }

        return error;
    }

    function updatemembertrip() 
    {
        var error = formValidation();
        if (error)
        {
            // new code
            return false;
        }

        var formstring = $("#currentmembertripForm").serialize();

        // alert(formstring);
        var formstringClean = encodeURIComponent(formstring);

        tripFactory.updatememberTrip(formstring)
        .success( function(data) {
            if (data !== "ok")
            {
                $scope.$parent.showAlert("Error updating Trip", data);
                // alert("Error updating Trip - "+data);
            }
            else
            {
                $scope.$parent.showAlert("Success", "Trip updated succesfully!");
                // alert("Trip updating succesfully!");
            }

        })
        .error( function(edata) {
            alert(edata);
        });
    }

    function deletemembertrip() 
    {
        var formstring = $("#currentmembertripForm").serialize();

        // alert(formstring);
        var formstringClean = encodeURIComponent(formstring);

        tripFactory.deletememberTrip(formstring)
        .success( function(data) {
            if (data !== "ok")
            {
                $scope.$parent.showAlert("Error deleting Trip", data);
                // alert("Error adding Trip - "+data);
            }
            else
            {
                $scope.$parent.showAlert("Success", "Trip deleted succesfully!");
                // alert("Trip added succesfully!");
                $("#currentmembertripForm")[0].reset();
            }

        })
        .error( function(edata) {
            alert(edata);
        });
    }

    function getCurrentMemberTrip() 
    {
        $scope.current.trip = {};

        // alert (membertripid);
        var data = "memberid="+ $scope.current.memberid;
        tripFactory.getcurrentmemberTrip(data)
        .success( function(data) {

            if (data.membertripid == 0)
            {
                $scope.$parent.showAlert("Warning", data.membertripname);

                $scope.current.trip = {};
            }
            else
            {
                data.tripstartdate = new Date(data.tripstartdate);
                data.tripenddate = new Date(data.tripenddate);

                $scope.current.trip = data;
            }            
        })
        .error( function(edata) {
            alert(edata);
        });
    }

    init();
    function init() {
        $scope.current = {};
        $scope.current.trip = {};

        //
        // get current memberid
        //
        $scope.current.memberlogin = loginService.getLogin();
        $scope.current.memberid = $scope.current.memberlogin.memberid;

        getCurrentMemberTrip($scope.current.memberid)
    };

    $scope.updatemembertrip = function() {
        updatemembertrip();
    };

    $scope.deletemembertrip = function() {
        deletemembertrip();
    };
}