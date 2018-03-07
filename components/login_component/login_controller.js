angular.module("app").controller("loginCtrl", function ($scope, $rootScope) {

    $scope.loginUser = function () {
        swal(
            'Login Successful!',
            '',
            'success'
        )
    }
});