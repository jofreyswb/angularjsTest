carsApp.directive('editInput', function () {
     return  {
        // приоритет директивы (см. выше)
        priority: 0,
        // шаблон, заданный явно
        // template: '<div></div>',
        // шаблон, заданный в виде ссылки или выражения
        templateUrl: 'templates/directive.html',
        // заменять ли исходный DOM на шаблон
        replace: true,
        // включить ли некоторые части исходного DOM в шаблон
        transclude: false,
        // ограничить применение директивы
        restrict: 'AE',
        // создавать/не создавать замыкание области видимости
        scope: {
            brand:'=',
            id:'='
        },
        // контроллер для директивы
        //controller: function($scope, element, attrs,Car) {
        //},
        // здесь можно изменять исходный DOM
        //compile: function compile(tElement, tAttrs, transclude) {
        //    return {
        //        pre: function preLink(scope, iElement, iAttrs, controller) {},
        //        post: function postLink(scope, iElement, iAttrs, controller) {}
        //    }
        //},
        // здесь находится основная функциональность директивы
        link: function postLink($scope, element, attrs,Car) {
            $scope.isEdit = false;

            $scope.EditAtr =function (){
                console.log($scope.id);
                console.log($scope.brand);
                $scope.isEdit = !$scope.isEdit;
            }
            $scope.editBrand = function(){
                $scope.isEdit = !$scope.isEdit;
                Car.update({id:$scope.id}, $scope.brand).$promise.then(function () {

                });
            }
        }
    }

});