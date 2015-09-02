(function(){

  'use strict';

  angular.module('bitwiseBooks')
    .factory('User', function($injector){
      function User(data){
        _.merge(this,data);
      }

      User.prototype = {
        findComments: function findComments(){
          var service = $injector.get('CommentsService');
          return _.where(service.comments, {author_id: this.id});
        }
      }

    });
}());