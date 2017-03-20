angular.module('fanSite').controller('aboutCtrl', function($scope, aboutService, $stateParams) {
  // $scope.captains = aboutService.getCaptains();

    $scope.captain = aboutService.getCaptainById($stateParams.id);
    console.log($scope.captain);

})
