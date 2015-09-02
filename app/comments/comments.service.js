(function(){
  'use strict';

  angular.module('bitwiseBooks')
    .service('CommentsService', function($http, $injector){
      var vm = this;
      vm.comments = [];

      vm.getComments = function getComments(){
        return $http.get('../../comments.json').then(function(res){
          return res.data.forEach(function(comment){
            return vm.comments.push(comment);
          })
        }, function(err){
          return "Sorry there was an error";
        });
      };

      vm.findUser = function findUser(comment){
        var service = $injector.get('UsersService');
        return _.find(service.authors, {_id: comment.id});
      }

    });
}());