(function(){

    'use strict';

    angular.module('bitwiseBooks')
        .service('AuthorsService', function(Author, $http){
            var vm = this;
            vm.authors = [];

            vm.buildAuthors = function buildAuthors(data){
                data.forEach(function(author){
                    vm.authors.push(new Author(author));
                });
                return vm.authors;
            };

            vm.getAuthors = function getAuthors(){
                vm.authors.splice(0);
                return $http.get('../../authors.json').then(function(res){
                    return vm.buildAuthors(res.data);
                }, function(err){
                    return "Sorry. There was an error."
                });
            };

            vm.find = function find(id){
                return _.find(vm.authors, {_id: id});
            };

        });
}());