(function(){
    'use strict';

    angular.module('bitwiseBooks')
        .controller('BookController', function(book){
            var vm = this;
            vm.book = book;
        });
}());