/**
 * Created by wchavarria-as on 22/12/2015.
 */
(function () {
  var controllerId = 'loads.controller';
  angular.module('app').controller(controllerId, [
    'LoadsService',
    '$scope',
    function (LoadsService,$scope){
      var vm = this;

      vm.loads = [];

      vm.getLoads = function getLoads(){
        LoadsService.getLoads().then(function getLoadsResponse(response){
          vm.loads = response;
          //Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.refreshComplete');

        });
      }

      function active(){
        vm.getLoads();
      }

      active();
    }
  ])
})();
