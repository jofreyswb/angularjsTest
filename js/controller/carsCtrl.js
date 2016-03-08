var carsAppControllers = angular.module('carsAppControllers', []);

carsAppControllers.controller('carsCtrl', ['$scope', '$routeParams', 'Car',
    function ($scope, $routeParams, Car,$location) {

        var car = Car.query(function () {
            $scope.carbrends = car;

        });

        $scope.Save = function () {
            console.log('save');
            if ($routeParams.carbrandId == 'new') {
                Car.save($scope.carbrand).$promise.then(function () {
                    $location.path('/cars');
                });
                //$scope.carbrand.$save();
            }else{
                Car.update({id:$routeParams.carbrandId}, $scope.carbrand).$promise.then(function () {
                    $location.path('/cars');
                });
            }
        };

        $scope.carbrand = Car.get({id: $routeParams.carbrandId});


        $scope.Delete = (function (carbrandId) {
            if (confirm('delete?')) {
                Car.delete({id: carbrandId});
            }
        });
    }]);
