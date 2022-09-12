(function () {
  'use strict';

  angular
    .module('app', [])
    .controller('createUserController', createUserController)
    .controller('showUserController', showUserController)
    .service('UsersService', UsersService);

  createUserController.$inject = ['UsersService'];
  function createUserController(UsersService) {
    // this bind works only for controller as syntax
    var self = this;

    self.createUser = function () {
      UsersService.addUser(self.name, self.age);
    };
  }

  showUserController.$inject = ['UsersService'];
  function showUserController(UsersService) {
    var self = this;
    self.users = UsersService.getUsers();

    self.removeUser = UsersService.removeUser;
  }

  function UsersService() {
    var service = this;

    var users = [{ name: 'test', age: 30 }];

    service.getUsers = function () {
      return users;
    };

    service.addUser = function (name, age) {
      users.push({ name, age });
    };

    service.removeUser = function (index) {
      users.splice(index, 1);
    };
  }
})();
