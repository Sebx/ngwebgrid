var app = angular.module("ngwebgrid", ["ngResource", "ngGrid"]);

app.controller('MainCtrl', ['$scope', 'Service', function($scope, Service) {
  $scope.servicedep = Service.all('proyecttypes');
  $scope.service = 'proyects';
  $scope.cellSelectEditableTemplate = '<select ng-class="\'colt\' + col.index" ng-input="COL_FIELD" ng-model="COL_FIELD" ng-options="t.id as t.name for t in servicedep" />';
  $scope.columns = [{field:'name', displayName:'Name', enableCellEdit: true},
      {field:'proyect_type_id', displayName:'Type', enableCellEdit: true, editableCellTemplate: $scope.cellSelectEditableTemplate, cellFilter: 'mapService:"ServiceConstant"'}];
}]);

app.directive('createTemplate', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      scope: false,
      template: "<div> \
        <input type='text' ng-model='form.name' placeholder='Enter a value'/> \
        <select ng-model='form.proyect_type_id' ng-options='t.id as t.name for t in servicedep'> \
          <option value=''>-- choose --</option> \
        </select> \
        <input type='submit' value='Add'> \
        <a href='' ng-click='update()'>Update</a> \
        <a href='' ng-click='delete()''>Delete</a> \
        </div>"
  };
});

app.factory('ServiceConstant', function(Service) {
  return Service.all('proyecttypes');
})
