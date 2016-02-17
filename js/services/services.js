    var carServices = angular.module('carServices', ['ngResource']);

    carServices.factory('Car',['$resource',
            function($resource){
                return $resource('/api/cars/:id');
    }]);