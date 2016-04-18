export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).state('register', {
      url: '/register',
      templateUrl: 'app/register/register.html',
      controller: 'RegisterController',
      controllerAs: 'register'
  });

  $urlRouterProvider.otherwise('/');
}
