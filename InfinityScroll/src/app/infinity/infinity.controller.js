/**
 * Created by wchavarria-as on 22/12/2015.
 */
(function () {
  var controllerId = 'infinity.controller';
  angular.module('app').controller(controllerId, [
    'InfinityService',
    '$scope',
    function (InfinityService, $scope){
      var vm = this;

      vm.loads = [];
      vm.loadedAmount = 10;

      vm.getLoadsSegment = function getLoadsSegment(loadAmount){
        InfinityService.getLoadsSegment(vm.loadedAmount,10).then(function getLoadsResponse(response){
          vm.loads = vm.loads.concat(response);
          vm.loadedAmount = vm.loads.length;
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
      };

      function active(){
        vm.getLoadsSegment();
      }

      active();
    }
  ])
})();
