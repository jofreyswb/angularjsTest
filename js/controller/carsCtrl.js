
    var carsAppControllers =  angular.module('carsAppControllers',[]);

    carsAppControllers.controller('carsCtrl', ['$scope','$routeParams', 'Car',
        function ($scope, $routeParams, Car){

             var car = Car.query(function(){
                 $scope.carbrends = car;

             });

            $scope.Edit = function(){};

            $scope.carbrand = Car.get({ id: $routeParams.carbrandId });


            $scope.Delete = (function(carbrandId) {
                Car.delete({ id:carbrandId });
            });
        }]);
