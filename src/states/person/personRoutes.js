
import templateUrl from './person.html'

routes.$inject = ['$stateProvider', '$urlRouterProvider'];


export default function routes ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('person', {
            url: '/person',
            templateUrl: templateUrl,
            controller: 'PersonCtr',
            controllerAs: 'person'
        });
}
