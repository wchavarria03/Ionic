/**
 * Created by wchavarria-as on 22/12/2015.
 */
(function(){
  var serviceId = 'LoadsService';
  angular.module('app').factory(serviceId,['configurationService','$http', '$q', function(configurationService,$http, $q){

    var url = configurationService.getUrl();

    function getLoads(){
      return $http.get(url + '/todos');
    }

    function getLoadsSegment(start, amount){
      var defer = $q.defer();
      $http.get(url + '/todos').success(function (loads) {
        if (loads.result) {
          var loads = loads.result.data;
          loads.result.data.splice(start, amount);
        }
        defer.resolve(loads);
      }).error(function (response) {
        defer.reject();
      });
      return defer.promise;
    }

    return {
      getLoads: getLoads,
      getLoadsSegment: getLoadsSegment
    };
  }]);
})();
