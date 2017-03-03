controllers.addtripController = function ($scope, $http, $location, loginService, rvtripsService, tripFactory) {
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

    function addnewtrip() 
    {
        var error = formValidation();
        if (error)
        {
            // new code
            return false;
        }

        var formstring = $("#addtripForm").serialize();

        // alert(formstring);
        var formstringClean = encodeURIComponent(formstring);

        tripFactory.addTripInfo(formstring)
        .success( function(data) {
            if (data !== "ok")
            {
                alert("Error adding Trip - "+data);
            }
            else
            {
                alert("Trip added succesfully!");
                $("#addtripForm")[0].reset();
            }

        })
        .error( function(edata) {
            alert(edata);
        });
    }

    init();
    function init() {
        $scope.current = {};

        //
        // get current memberid
        //
        $scope.current.memberlogin = loginService.getLogin();
        $scope.current.memberid = $scope.current.memberlogin.memberid;

    };

     

    $scope.addnewtrip = function() {

        addnewtrip();
    };
}