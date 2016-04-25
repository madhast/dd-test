
config.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function config ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $urlRouterProvider.otherwise('/person');
}
