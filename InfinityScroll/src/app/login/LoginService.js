/**
 * Created by wchavarria-as on 21/12/2015.
 */
(function(){
  'use strict';
  var serviceId = 'LoginService';
  angular.module('app').factory(serviceId,['configurationService','$http', '$q',function(configurationService,$http, $q){

    var url = configurationService.getUrl();

    function loginUser(name, password){
      var deferred = $q.defer();
      var promise = deferred.promise;

      if(name === 'admin' && password === '123qwe') {
        deferred.resolve('Welcome '+ name + '!');
      } else {
        deferred.reject('Wrong credentials.');
      }

      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      };

      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      }

      return promise;

      //return $http.post(url + '/api/services/app/loadManagement/GetAll',{ 'id': id});
    }

    return {
      loginUser: loginUser
    };
  }]);
})();
