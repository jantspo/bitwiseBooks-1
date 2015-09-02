(function(){
  'use strict';

  angular.module('bitwiseBooks')
    .directive('comments', function(){
      return{
        restrict: 'E',
        link: function(scope, elements, attrs){
        },
        controller: function($scope, $injector){
          var itemId = $scope.item.id,
              usersService = $injector.get('UsersService'),
              commentsService = $injector.get('CommentsService');

          $scope.comments = _.where(commentsService, {comment_for: itemId });
          $scope.user = usersService.users;
        },
        scope:{
          item: '='
        },
        templateUrl: 'comments.tpls.html'
      }
    });
}());