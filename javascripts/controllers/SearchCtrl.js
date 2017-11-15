'use strict';

app.controller("SearchCtrl", function($scope, tmdbService){
    
    $scope.enterPush = (event) => {
        if (event.keyCode === 13) {
            tmdbService.searchMovies(event.target.value).then((results) => {
                console.log(results.data.results);
            }).catch((error) => {
                console.log("Error in searchMovies", error);
            });
        }
    };

});