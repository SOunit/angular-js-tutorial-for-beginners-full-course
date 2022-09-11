(function () {
  'use strict';

  angular.module('app', []).controller('nameController', function ($scope) {
    // open to outside
    $scope.name = '';
    $scope.nameNumber = 0;
    $scope.updateNumber = updateNumber;

    function updateNumber() {
      $scope.nameNumber = calcNameNumber($scope.name);
    }

    function calcNameNumber(name) {
      var sum = 0;

      for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
      }

      return sum;
    }
  });
})();
