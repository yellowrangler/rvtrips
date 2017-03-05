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
        // var error = formValidation();
        // if (error)
        // {
        //     // new code
        //     return false;
        // }

        // var formstring = $("#managemembertripForm").serialize();

        // // alert(formstring);
        // var formstringClean = encodeURIComponent(formstring);

        // tripFactory.addmemberTrip(formstring)
        // .success( function(data) {
        //     if (data !== "ok")
        //     {
        //         $scope.$parent.showAlert("Error adding Trip", data);
        //         // alert("Error adding Trip - "+data);
        //     }
        //     else
        //     {
        //         $scope.$parent.showAlert("Success", "Trip added succesfully!");
        //         // alert("Trip added succesfully!");
        //         $("#managemembertripForm")[0].reset();
        //     }

        // })
        // .error( function(edata) {
        //     alert(edata);
        // });
    }

    function deletemembertrip() 
    {
        // var error = formValidation();
        // if (error)
        // {
        //     // new code
        //     return false;
        // }

        // var formstring = $("#addtripForm").serialize();

        // // alert(formstring);
        // var formstringClean = encodeURIComponent(formstring);

        // tripFactory.addmemberTrip(formstring)
        // .success( function(data) {
        //     if (data !== "ok")
        //     {
        //         $scope.$parent.showAlert("Error adding Trip", data);
        //         // alert("Error adding Trip - "+data);
        //     }
        //     else
        //     {
        //         $scope.$parent.showAlert("Success", "Trip added succesfully!");
        //         // alert("Trip added succesfully!");
        //         $("#managemembertripForm")[0].reset();
        //     }

        // })
        // .error( function(edata) {
        //     alert(edata);
        // });
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

    init();
    function init() {
        $scope.current = {};
        $scope.current.trip = {};

        //
        // get current memberid
        //
        $scope.current.memberlogin = loginService.getLogin();
        $scope.current.memberid = $scope.current.memberlogin.memberid;

        //
        // get list for type ahead
        //
        var data = "memberid="+ $scope.current.memberid;
        tripFactory.getmembertypeaheadTrip(data)
        .success( function(data) {
            $scope.membertrips = data;
        })
        .error( function(edata) {
            alert(edata);
        });

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