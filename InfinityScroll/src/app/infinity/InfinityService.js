/**
 * Created by wchavarria-as on 22/12/2015.
 */
(function(){
  var serviceId = 'InfinityService';
  angular.module('app').factory(serviceId,['configurationService','$http', '$q', function(configurationService,$http, $q){

    var url = configurationService.getUrl();

    function getLoadsSegment(start, amount){
      var defer = $q.defer();
      $http.get(url + '/todos').success(function (loads) {
        if (loads) {
          var loads = loads;
          loads = loads.splice(start, amount);
        }
        defer.resolve(loads);
      }).error(function (response) {
        defer.reject();
      });
      return defer.promise;
    }

    return {
      getLoadsSegment: getLoadsSegment
    };
  }]);
})();
