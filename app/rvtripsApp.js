var rvtripsApp = angular.module ('rvtripsApp', [
    'ngRoute', 
    'ngAnimate', 
    'ngTouch', 
    'ui.grid', 
    'ui.grid.selection', 
    'ngSanitize']);

// define routes for app
rvtripsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home',
            {
                controller: 'homeController',
                templateUrl: 'app/partials/home.html'
            })
        .when('/faqs',
            {
                controller: 'faqsController',
                templateUrl: 'app/partials/faqs.html'
            })  
        .when('/addmembertrip',
            {
                controller: 'addmembertripController',
                templateUrl: 'app/partials/addmembertrip.html'
            })
        .when('/managemembertrip',
            {
                controller: 'managemembertripController',
                templateUrl: 'app/partials/managemembertrip.html'
            })
        .when('/servicestop',
            {
                controller: 'serviceStopController',
                templateUrl: 'app/partials/servicestop.html'
            })  
        .when('/editservicestop',
            {
                controller: 'editservicestopController',
                templateUrl: 'app/partials/editservicestop.html'
            })
        .when('/currentstats',
            {
                controller: 'currentstatsController',
                templateUrl: 'app/partials/currentstats.html'
            })  
        .when('/tripstats',
            {
                controller: 'tripstatsController',
                templateUrl: 'app/partials/tripstats.html'
            })                   
        .when('/adduser',
            {
                controller: 'adduserController',
                templateUrl: 'app/partials/adduser.html'
            })
        .when('/updateuser',
            {
                controller: 'updateuserController',
                templateUrl: 'app/partials/updateuser.html'
            })
        .when('/addservicestation',
            {
                controller: 'addservicestationController',
                templateUrl: 'app/partials/addservicestation.html'
            })
        .when('/updateservicestation',
            {
                controller: 'updateservicestationController',
                templateUrl: 'app/partials/updateservicestation.html'
            })
        .when('/login',
            {
                controller: 'loginController',
                templateUrl: 'app/partials/login.html'
            }) 

        .otherwise({redirectTo: '/home' });
});
