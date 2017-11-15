'use strict';

app.run(function($rootScope, FIREBASE_CONFIG, tmdbService) {
    firebase.initializeApp(FIREBASE_CONFIG);

    tmdbService.tmdbConfiguration().then((results) => {
        $rootScope.image_url = results.data.images.base_url;
    }).catch((error) => {
        console.log("Error in getPosters", error);
    });
});

app.config(function($routeProvider) {
    $routeProvider
        .when("/auth", {
            templateUrl: 'partials/auth.html',
            controller: 'AuthCtrl'
        })
        .when("/search", {
            templateUrl: 'partials/search.html',
            controller: 'SearchCtrl'
        })
        .when("/wishlist", {
            templateUrl: 'partials/wishlist.html',
            controller: 'WishlistCtrl'
        })
        .when("/rated", {
            templateUrl: 'partials/rated.html',
            controller: 'RatedCtrl'
        })
        .otherwise('/auth');
});