    var carServices = angular.module('carServices', ['ngResource']);

    carServices.factory('Car',['$resource',
            function($resource){
                return $resource('phones/:phoneId.json', {}, {
                    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
                });
    }]);