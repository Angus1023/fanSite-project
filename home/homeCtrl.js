angular.module('fanSite').controller('homeCtrl', function($scope, aboutService) {
  $scope.captains = aboutService.getCaptains();
    console.log($scope.captains);
})
