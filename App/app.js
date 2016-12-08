"use strict";
let app = angular.module("Centrist", ['ngRoute']);

// Grab the Auth Factory. 
let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	AuthFactory.isAuthenticated()
		.then((userExists) => {
			if(userExists){
				resolve();
			} else {
				reject();
			}
		});
});


app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/boardView.html',
			controller: "createBoardCtrl",
			resolve: {isAuth}
			// Resolve: safety feature so people can't just go to the URL. 
		})
		.when('/board-view', {
			templateUrl: 'partials/boardView.html',
			controller: "createBoardCtrl",
			resolve: {isAuth}
		})
		.when('/login', {
			templateUrl: 'partials/loginView.html',
			controller: "LoginCtrl"
		})
		.otherwise('/'); 
});


app.run( ($location, FBCreds) => {

	let creds = FBCreds;

	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain
	};

	firebase.initializeApp(authConfig);

});