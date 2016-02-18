
    var carsAppControllers =  angular.module('carsAppControllers',[]);

    carsAppControllers.controller('carsCtrl', ['$scope','$routeParams', 'Car',
        function ($scope, $routeParams, Car){
            // $scope.carbrends = Car.query().promise();
            //console.log(carbrends);
             var car = Car.query(function(){
                 $scope.carbrends = car;
                 console.log(car);
             });
             //var entry = Car.get({ id: $scope.id }, function() {
             //    console.log(entry);
             //})

        }]);
