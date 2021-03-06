'use strict';

app.controller("WishlistCtrl", function($location, $rootScope, $scope, MovieService){
    $scope.movies = [];

    const getMovies = () => {
        MovieService.getWishlistMovies($rootScope.uid).then((results) => {
            $scope.movies = results;
        }).catch((error) => {
            console.log("error in getRatedMovies", error);
        });
    };

    getMovies();
    
    $scope.deleteMovie = (movieId) => {
        MovieService.deleteMovie(movieId).then((result) => {
            getMovies();
        }).catch((error) => {
            console.log("error in getRatedMovies", error);
        });
    };

    $scope.switchWatched = (movie) => {
        movie.isWatched = true;
        let newMovie = MovieService.createMovieObject(movie);
        MovieService.updateMovie(newMovie, movie.id).then((results) => {
        getMovies();    
        }).catch((error) => {
            console.log("error in updateMovie", error);
        });
    };

    $scope.movieDetail = (movieId) => {
        $location.path(`/movie/${movieId}`);
    };
});