
    var carsAppControllers =  angular.module('carsAppControllers',[]);

    carsAppControllers.controller('carsCtrl', ['$scope','$routeParams', 'Car',
        function ($scope, Car){
             $scope.cars = Car.query();
             var car = Car.query(function(){
                 console.log(car);
             });
             var entry = Car.get({ id: $scope.id }, function() {
                 console.log(entry);
             })
            console.log('hello');
        }]);
