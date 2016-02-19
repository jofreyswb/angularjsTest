var carsApp = angular.module('carsApp', [
    'ngRoute',
    'carServices',
    'carsAppControllers'
]);

carsApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/cars',{
                templateUrl: 'templates/cars.html',
                controller: 'carsCtrl'
            }).
            when('/cars/:carbrandId',{
                templateUrl: 'templates/newcarbrand.html',
                controller: 'carsCtrl'
            }).
            otherwise({
            redirectTo: '/cars'
        });
    }
]);


