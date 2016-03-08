carsApp.directive('editInput', function () {
     return  {
        // ��������� ��������� (��. ����)
        priority: 0,
        // ������, �������� ����
        // template: '<div></div>',
        // ������, �������� � ���� ������ ��� ���������
        templateUrl: 'templates/directive.html',
        // �������� �� �������� DOM �� ������
        replace: true,
        // �������� �� ��������� ����� ��������� DOM � ������
        transclude: false,
        // ���������� ���������� ���������
        restrict: 'AE',
        // ���������/�� ��������� ��������� ������� ���������
        scope: {
            brand:'=',
            id:'='
        },
        // ���������� ��� ���������
        //controller: function($scope, element, attrs,Car) {
        //},
        // ����� ����� �������� �������� DOM
        //compile: function compile(tElement, tAttrs, transclude) {
        //    return {
        //        pre: function preLink(scope, iElement, iAttrs, controller) {},
        //        post: function postLink(scope, iElement, iAttrs, controller) {}
        //    }
        //},
        // ����� ��������� �������� ���������������� ���������
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