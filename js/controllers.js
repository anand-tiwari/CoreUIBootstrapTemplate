// controller.js
angular
.module('app')
.controller('AuthCtrl', AuthCtrl)


AuthCtrl.$inject = ['$scope', '$rootScope', 'AuthService', '$state'];
function AuthCtrl($scope, $rootScope, AuthService, $state) {
	function init(){
        $scope.userName = 'test@thethingscloud.com';
        $scope.passWord = 'qwerty123';
    }

    $scope.login = function(){
        AuthService.signIn($scope.userName,$scope.passWord);
        // $state.go('dashboard');
    }

    $scope.logout = function(){
      $state.go('login');
    }

  	init();
}