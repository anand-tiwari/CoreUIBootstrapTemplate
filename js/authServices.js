angular.module('app')
.factory('AuthService', function ($http, $state, $log,$rootScope) {
    function signIn(uname,pass) {
        $http({
            method: 'POST',
            url: 'http://23.253.107.65',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: {
                Username: uname,
                password: pass
            }
        }).then(function(data){
            console.log("success");
            $state.go('app.main');
        }, function(data){

        })
    };
    
    return {
      signIn: signIn
    };

});