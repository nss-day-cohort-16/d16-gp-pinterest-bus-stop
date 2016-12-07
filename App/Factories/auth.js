"use strict";

app.factory("AuthFactory", function(){
	let currentUser = null;

	// Must Create A User Before We can Use one

	let createUser = function (user){
		let provider = new firebase.auth.GoogleAuthProvider(),
		currentUser = null;

		//listen for log in or log out actions and set currentUser's value
	firebase.auth().onAuthStateChanged(function(user){
		if (user) {
			currentUser = user.uid;
			console.log("currentUser Logged in?", 	currentUser);
		} else {
			currentUser = null;
			console.log("currentUser Logged out?", currentUser);
		}
});

	};

	let loginUser =function(user){
		//
	};

	let logoutUser = function(user){

	};

	let isAuthenticated = function(user){

	};

	let getUser = function(user){

	};

	return {createUser, loginUser, logoutUser, isAuthenticated, getUser}
})

