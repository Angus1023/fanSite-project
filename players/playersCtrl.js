angular.module('fanSite').controller('playersCtrl', function($scope, playersService) {
  $scope.players = playersService.getPlayers();
  console.log($scope.players);
 $scope.test="I'm free!!"
})
