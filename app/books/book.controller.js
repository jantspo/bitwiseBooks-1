(function(){
    'use strict';

    angular.module('bitwiseBooks')
        .controller('BookController', function($stateParams, book ){
            var vm = this;
            vm.book = book;
        });
}());