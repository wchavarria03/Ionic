/**
 * Created by wchavarria-as on 21/12/2015.
 */
(function () {
  var controllerId = 'login.controller';
  angular.module('app').controller(controllerId, [
    'LoginService',
    '$ionicPopup',
    '$location',
    function (LoginService, $ionicPopup, $location){
      var vm = this;

      vm.username = '';
      vm.password = '';
      vm.rememberMe = '';

      vm.login = function login() {
        LoginService.loginUser(vm.username, vm.password)
          .success(function successLoginResponse(response){
            $location.path('/loads');
          })
          .error(function errorLoginResponse(response) {
            var alertPopup = $ionicPopup.alert({
              title: 'Login failed',
              template: 'Please check your credentials'
            });
          });
      }

      function checkRememberMe() {

        if(true) { //if localstorage info

          vm.login();
        }
      }

      checkRememberMe();
    }
  ])
})();
