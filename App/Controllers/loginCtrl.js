"use strict";

console.log("loginCtrl");
//cannot use fat arrows on constructors

app.controller("LoginCtrl", function($scope, AuthFactory, $window) {

	console.log("control");

	$scope.account = {
		email: "",
		password: ""
	};

	$scope.register = () => {
		AuthFactory.createUser($scope.account)
			.then((userData) => {
				$scope.login();
			});
	};

	$scope.login = () => {
		AuthFactory.loginUser($scope.account)
			.then((user) => {
				$window.location.href = "/";
				
			});
	};
});
