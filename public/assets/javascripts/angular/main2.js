var app = angular.module("ngwebgrid", ["ngResource", "ngGrid"]);

app.controller('MainCtrl', ['$scope', 'Service', function($scope, Service) {
  $scope.service = 'proyecttypes';
  $scope.columns = [{field:'name', displayName:'Name', enableCellEdit: true},
      {field:'description', displayName:'Description', enableCellEdit: true}];
}]);

app.directive('createTemplate', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      scope: false,
      template: "<div> \
        <input type='text' ng-model='form.name' placeholder='Enter a value'/> \
        <input type='text' ng-model='form.description' placeholder='Enter a value'/> \
        <input type='submit' value='Add'> \
        <a href='' ng-click='update()'>Update</a> \
        <a href='' ng-click='delete()''>Delete</a> \
        </div>"
  };
});
