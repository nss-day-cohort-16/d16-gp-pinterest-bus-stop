"use strict";


app.auth("authFactory", function () {
	let currentUser= null;

let createUser = function () {

	return firebase.auth().createUserWithEmailandPassword(userObj.)
}


let logIn = function () {

	return firebase.auth().signInWithEmailAndPassword(email, pass);
}


let logOut = function () {


	return firebase.auth();
	signOut();
}

let isAuthenticated = function (){

	return new Promise ((resolve, reject) => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user ) {
				currentUser = user.uid;
				resolve (true);
			} else {
				resolve (false);
			}
		});
	});
};


let getCurrentUser = function () { 

	return currentUser;
};

return {
	createUser,
	logIn,
	logOut,
	isAuthenticated,
	getCurrentUser
};

});