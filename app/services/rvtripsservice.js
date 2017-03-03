rvtripsApp.service('rvtripsService', function () {
	var localStorageKeyCurrentTrip = "rvtripsCurrentTrip";

    this.getEmptyCurrentTrip = function() {
        var CurrentTrip = emptyCurrentTrip;

        return CurrentTrip;
    }

    this.getCurrentTrip = function() {
        var CurrentTripStr = this.retreiveCurrentTrip();
        var CurrentTrip = JSON.parse(CurrentTripStr);

        return CurrentTrip;
    }

    this.addCurrentTrip = function(CurrentTrip) {
        var CurrentTripStr = JSON.stringify(CurrentTrip);
        this.saveCurrentTrip(CurrentTripStr);

        return CurrentTrip;
    }

    this.saveCurrentTrip = function (CurrentTripStr) {
        localStorage.removeItem(localStorageKeyCurrentTrip);
        localStorage.setItem(localStorageKeyCurrentTrip, CurrentTripStr);
    }

    this.retreiveCurrentTrip = function () {
        var CurrentTripStr = localStorage.getItem(localStorageKeyCurrentTrip);

        return CurrentTripStr;
    }

    this.removeCurrentTrip = function () {
        localStorage.removeItem(localStorageKeyCurrentTrip);
    }

    var CurrentTrip = [
        {  }
    ];
});









