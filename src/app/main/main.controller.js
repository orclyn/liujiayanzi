(function() {
  'use strict';

  angular
    .module('yeoman')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    $scope.menuItemHover = function($event){
      angular.element($event.currentTarget).children()
    }
  }
})();
