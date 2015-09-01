(function(){
    'use strict'
    //again, getting our main app module and setting it to a var
    angular.module('bitwiseBooks')
        .controller('BooksController', function(books){
            var vm = this;
            vm.books = books;
        })
}());