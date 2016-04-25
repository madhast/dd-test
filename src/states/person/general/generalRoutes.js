
import templateUrl from './general.html'

routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
    $stateProvider
        .state('person.general', {
            url: '/general',
            parent: 'person',
            templateUrl: templateUrl,
            controller: 'GeneralCtr',
            controllerAs: 'person',
            resolve: {
                generalResolve: function (personResource) {
                    return personResource.general().$promise;
                }
            }
        });
}
