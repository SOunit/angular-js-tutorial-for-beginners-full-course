(function () {
  'use strict';

  angular.module('app', []).controller('mainController', mainController);

  mainController.$inject = ['$scope'];
  function mainController($scope) {
    $scope.name = 'test name';
  }
})();
