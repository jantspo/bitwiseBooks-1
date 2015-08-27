(function(){
    'use strict';

    angular.module('bitwiseBooks')
        .service('BooksService', function(Book, $http){
            var vm = this;

            vm.books = [];
            vm.genres = [];

            vm.makeBooks = function(data){
                data.forEach(function(book){
                    vm.books.push(new Book(book));
                });
                return vm.books;
            };

            vm.getGenres = function getGenres(){
               return $http.get('../../genres.json').then(function(res){
                   var data = res.data;
                   data.forEach(function(genre){
                       vm.genres.push(genre);
                   });
               }, function(err){
                   return "Sorry, there was an error."
               });

            };

            vm.getBooks = function getBooks(){
                vm.books.splice(0);
               return $http.get('../../books.json').then(function(res){
                   return vm.makeBooks(res.data);
               }, function(err){
                   return "Sorry, there was an error."
               });
            };

            vm.find = function find(bookId){
                return _.find(vm.books, {_id: bookId});
            };

            vm.findGenre = function findGenre(genreId){
                return _.find(vm.genres, {_id: genreId});
            }
        });
}());