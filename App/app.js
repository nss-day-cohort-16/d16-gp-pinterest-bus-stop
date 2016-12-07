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
		// .when('/', {
		// 	templateUrl: '' //,
		// 	//controller: 'ItemListCtrl',
		// 	// Resolve: safety feature so people can't just go to the URL. 
		// 	//resolve: {isAuth}
		// })
		// .when('/', {
		// 	templateUrl: '',
		// 	controller: ""
		// })
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