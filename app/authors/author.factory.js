(function(){
    'use strict';

    angular.module('bitwiseBooks')
        .factory('Author', function($injector){

            function Author(data){
                _.merge(
                    this,
                    {},
                    data
                );
            }

            Author.prototype = {
                findBooks: function findBooks(){
                    var service = $injector.get('BooksService');
                    return _.where(service.books, {authorId: this.id});
                }
            };

            return Author;
        });
}());