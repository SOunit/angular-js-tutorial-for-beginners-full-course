(function () {
  'use strict';

  angular.module('app', []).controller('mainController', mainController);

  mainController.$inject = ['$scope', '$filter'];
  function mainController($scope, $filter) {
    $scope.money = $filter('currency')(0.5, '\\', 2);
    $scope.yen = 10;
  }
})();
