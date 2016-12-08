"use strict";


app.controller("createPinView", function($scope, pinsStored, $routeParams) {
    
    console.log("routing is working", $routeParams.itemId);

    //$scope.selectedItem = ?

        pinsStored.getSingleItem($routeParams.itemId)
        .then((itemObject) => {

            $scope.selectedItem = itemObject;
            $scope.$apply();
        });

});

