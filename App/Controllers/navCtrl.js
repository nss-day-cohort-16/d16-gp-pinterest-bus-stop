/
"use strict";

app.controller('navCtrl', function($scope) {

    $scope.navItems = [{
        name: "Login/Register",
        url: '#/login'
    }, {
        name: "Logout",
        url: '#/logout'
    }];

    $scope.menuView = [{

            name: "Create Board",
            url: '#/create-board'

        },

        {
            name: "View Board",
            url: '#/view-board'
        }
    ]



});