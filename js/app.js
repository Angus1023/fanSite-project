angular.module('fanSite',['ui.router']).config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('', '/');

  $stateProvider
    .state('home', {
      templateUrl: 'home/home.html',
      controller: 'homeCtrl',
      url: '/'
    })
    .state('players', {
      templateUrl: "players/players.html",
      controller: 'playersCtrl',
      url: '/players'
    })


});
