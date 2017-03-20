angular.module('fanSite').controller('playersCtrl', function($scope, playersService) {
  $scope.players = playersService.getPlayers();
  console.log($scope.players);
  // $scope.captains = aboutService.getCaptains();
    // console.log($scope.captains);
 $scope.test="I'm free!!"
})
