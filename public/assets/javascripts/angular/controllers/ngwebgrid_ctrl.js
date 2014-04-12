app.controller('ComponentCtrl', ['$scope', 'Service', '$filter', function($scope, Service, $filter) {
  $scope.data = Service.all($scope.service);
  $scope.currentSelections = [];
  $scope.form = {};

  $scope.create = function() {
    var attr = $scope.form;
    var newobj = Service.create($scope.service, attr);
    $scope.data.push(newobj);
  };

  $scope.update = function() {
    angular.forEach($scope.currentSelections, function(value, key) {
      Service.update($scope.service, value);
    });
  };

  $scope.delete = function() {
    angular.forEach($scope.currentSelections, function(value, key) {
      var idx = $scope.data.indexOf(value);
      Service.delete($scope.service, value.id);
      $scope.data.splice(idx, 1);
    });
  };

  $scope.gridOptions = {
    data: 'data',
    jqueryUITheme: true,
    enableCellSelection: true,
    selectedItems: $scope.currentSelections,
    enableCellEditOnFocus: true,
    showSelectionCheckbox: true,
    multiSelect: true,
    columnDefs: $scope.columns
  };

}])

app.directive('ngwebgrid', function() {
  return {
    restrict: 'AE',
    scope: true,
    replace: 'true',
    controller: "ComponentCtrl",
    template: '<div id="ngwebgrid"> \
      <div class="gridStyle" ng-grid="gridOptions"></div> \
        <form ng-submit="create()"> \
          <div ng-switch on="createtemplate"> \
              <div ng-switch-when="create-template"><create-template></create-template></div> \
              <div ng-switch-when="create-template2"><create-template2></create-template2></div> \
              <div ng-switch-when="create-template3"><create-template3></create-template3></div> \
              <div ng-switch-when="create-template4"><create-template4></create-template4></div> \
              <div ng-switch-default><create-template></create-template></div> \
          </div> \
          <input type="submit" value="Add"> \
          <input type="button" ng-click="update()" value="Update"> \
          <input type="button" ng-click="delete()" value="Delete"> \
        </form> \
      </div>'
  };
});

app.filter('getByProperty', function() {
    return function(propertyName, propertyValue, collection) {
      var i=0, len=collection.length;
      for (; i<len; i++) {
        if (collection[i][propertyName] == +propertyValue) {
          return collection[i];
        }
      }
      return null;
    }
})

app.filter('mapService', function(ServiceConstant, $filter) {
  return function(input, service) {
    var found = $filter('getByProperty')('id', input, ServiceConstant);

    if (found != null) {
      return found.name
    } else {
      return '';
    }
  };
})