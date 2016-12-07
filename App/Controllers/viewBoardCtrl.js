"use strict";

app.controller('createBoardCtrl', function($scope, boardStorage, SearchTermData){
	$scope.searchText = SearchTermData;
	boardStorage.getBoardList()
	.then((itemArray) => {
		$scope.items = itemArray;
		$scope.$apply();
	});
});
