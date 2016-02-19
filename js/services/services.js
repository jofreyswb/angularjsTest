    var carServices = angular.module('carServices', ['ngResource']);

    carServices.factory('Car',['$resource',
            function($resource){
                return $resource('/api/carbrands/:id', { id: '@_id' }, {
                    update: {
                        method: 'PUT' // this method issues a PUT request
                    }});
    }]);