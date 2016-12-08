app.controller("createBoardsCtrl", function($scope, AuthFactory, $location, BoardFactory){
    $scope.btn = "Create New Board";
let brd = auth.getUser();
    $scope.boardObj = {
        uid: brd,
        Title: "",
        Description: ""
    };

    $scope.addNewBoard = function (){
        BoardFactory.postBoard($scope.boardObj)
        .then((response) => {
            $location.url('/view-board');
        });
    };
});


