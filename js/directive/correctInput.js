carsApp.directive('editInput', function () {
    return {
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
            carbrand: '=brand',
            change: '&change',
            type:'='
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
        link: function postLink($scope, element, attrs, Car) {
            $scope.type = $scope.type ? $scope.type :'text';
            $scope.isEdit = false;
            var txt ='asdasdasd';
$scope.texttxt = txt;
            $scope.EditAtr = function () {
                console.log($scope.carbrand.id);
                console.log($scope.carbrand.brand);
                $scope.isEdit = !$scope.isEdit;
                console.log($scope.carbrand);
            };
            $scope.editBrand = function (brand) {
                $scope.isEdit = !$scope.isEdit;
                $scope.change(brand);
            }
        }
    }

});