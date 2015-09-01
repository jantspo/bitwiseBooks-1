(function(){
    'use strict';
    //This is our main app module

    //declare our module. modules take 2 arguments, the module name and any dependencies it needs to run passed as an array
    var app = angular.module('bitwiseBooks',['ui.router','ui.bootstrap',
                                            'ui.bootstrap.tpls']);

    //here we set up the basic config, we use ui-router's $stateProvider to create states for our site and
    // $urlRouterProvider to set the default route
    app.config(function($stateProvider, $urlRouterProvider) {

        //this is our parent state. it's set to abstract so it won't be used for displaying anything,
        // but will be used to "frame" all our other states
        //we set the states name to bitwiseBooks, all states that are child of it will use bitwiseBooks.newStateName
        //the template is what is displayed in the browser, in this case the <ui-view> will be used as the location
        // where we pass in the other state's templates
        $stateProvider.state('bitwiseBooks', {
            abstract:true,
            template: '<ui-view>'
        })
            //out home state, we give it a name based of the parent state('bitwiseBooks'), set what the url will be,
            //what controller we use for this view, and finally the location of the html file we use for this state
            .state('bitwiseBooks.home',{
                url:'/',
                controller:'HomeController',
                controllerAs:'home',
                templateUrl: 'home/home.html'
            })
            //same as above, because it's parent is the abstract state and not the home state we use bitwiseBooks.books
            .state('bitwiseBooks.books',{
                url:'/books',
                controller: 'BooksController',
                controllerAs: 'books',
                templateUrl: 'books/books.html',
                resolve: {
                    books: function(BooksService) {
                        return BooksService.getBooks();
                    },
                    genres: function genres(BooksService){
                        return BooksService.getGenres();
                    },
                    authors: function(AuthorsService) {
                        return AuthorsService.getAuthors();
                    }
                }
            })
            //single book state, is a child of the books state, we set the url to a variable that we can use to look up
            //the appropriate book in our service
            .state('bitwiseBooks.books.single', {
                url:'/:bookId',
                controller: 'BookController',
                controllerAs:'book',
                templateUrl:'books/book.html',
                resolve: {
                    book: function(books, BooksService, $stateParams){
                        return BooksService.find($stateParams.bookId);
                    },
                    genres: function genres(BooksService){
                        return BooksService.getGenres();
                    },
                    authors: function(AuthorsService) {
                        return AuthorsService.getAuthors();
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    })

}());