"use strict";

app.controller("createBoardCtrl", function($scope, AuthFactory, $location, Boards){
	$scope.btn = "Create New Board";

let currentUser = AuthFactory.getUser();
	$scope.boardObj = {
		uid: currentUser,
		Title: "",
		Description: ""
	};

	$scope.addNewBoard = function (){
		console.log("Clicked New Board");
		Boards.postBoard($scope.boardObj)
		.then((response) => {
			$location.url('/');
		});
	};
});

console.log("createBoardCtrl");