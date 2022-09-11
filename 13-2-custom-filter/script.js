(function () {
  'use strict';

  angular
    .module('app', [])
    .controller('mainController', mainController)
    // 2. register filter
    // name is used to DI by Angular, getFive + Filter
    .filter('getFive', getFiveFilter);

  // 3. get via DI
  // follow name convention of Angular
  mainController.$inject = ['$scope', 'getFiveFilter'];
  function mainController($scope, getFiveFilter) {
    $scope.name = getFiveFilter();
  }

  // 1. create filter factory
  function getFiveFilter() {
    return function () {
      return 5;
    };
  }
})();
