/**
 * Created by wchavarria-as on 21/12/2015.
 */
(function () {
  var serviceId = 'configurationService';
  angular.module('app')
    .service(serviceId, [ function () {
      var Url = "http://jsonplaceholder.typicode.com";

      function getUrl(){
        return  Url;//'http:192.168.188.190:8888';
      }

      var title = { value: '' };
      var menu = { isActive: false };

      function getMenu() {
        return menu;
      }

      function setMenu(isActive) {
        menu.isActive = isActive;

      }

      function getTitle() {
        return title;
      }

      function setTitle(newTitle) {
        title.value = newTitle;

      }

      return {
        setTitle : setTitle,
        getTitle: getTitle,
        setMenu: setMenu,
        getMenu : getMenu,
        getUrl : getUrl
      };
    }]);
})();
