(function(){
  'use strict';

  angular.module('bitwiseBooks')
    .service('UsersService', function($http, User){
      var vm = this;
      vm.users = [];

      vm.makeUsers = function makeUsers(data){
        data.forEach(function(user){
          vm.users.push(new User(user));
        });
        return vm.users;
      };

      vm.getUsers = function getUsers(){
        vm.users.splice(0);
        return $http.get('../../users.json').then(function(res){
          return vm.makeUsers(res.data);
        }, function(err){
          return "Users not found";
        });
      };

      vm.find = function find(id){
        return _.where(vm.users, {_id: id})
      };


    });
}());