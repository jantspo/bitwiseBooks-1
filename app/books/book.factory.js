(function(){
    'use strict';

    angular.module('bitwiseBooks')
        .factory('Book', function($injector){

            function Book(data){
                _.merge(
                    this,
                    {},
                    data
                );
            }

            Book.prototype = {

                findAuthor: function findAuthor(){
                    var service = $injector.get('AuthorsService'),
                        author = service.find(this.authorID);
                    return author.name;
                },

                findGenre: function findGenre(){
                    var service = $injector.get('BooksService'),
                        genre = service.findGenre(this.genreId);
                    return genre.genre;
                },

                inStock: function inStock(){
                    if(this.isInStock){
                        return "In Stock"
                    }else{
                        return "Out of Stock"
                    }
                }
            };

            return Book;
        });
}());