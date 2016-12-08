"use strict";

app.controller('viewBoardCtrl', function($scope, boardStorage, SearchTermData){
	$scope.searchText = SearchTermData;
	boardStorage.getBoardList()
	.then((itemArray) => {
		$scope.items = itemArray;
		$scope.$apply();
	});
});