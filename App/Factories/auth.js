"use strict";

app.factory("AuthFactory", function(){

	//Set the current user to null. The user will be null until authenticated.
	//userObj from loginCtrl.js
	
	let currentUser = null;

	let createUser = function(userObj){
		console.log(userObj);
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);
	};

	let loginUser = function(userObj){
		return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password);
	};

	let logoutUser = function(){
		return firebase.auth().signOut();
	};

	// A Promise wrapped around a listener. 
	let isAuthenticated = function(){
		return new Promise ((resolve, reject) => {
			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					currentUser = user.uid;
					console.log("currentUser", currentUser);
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	};

	let getUser = function(){
		return currentUser;
	};

	return{createUser, loginUser, logoutUser, isAuthenticated};

