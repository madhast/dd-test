
import templateUrl from './friends.html'

personGeneralRoutes.$inject = ['$stateProvider'];

export default function personGeneralRoutes ($stateProvider) {
    $stateProvider
        .state('person.friends', {
            url: '/friends',
            parent: 'person',
            templateUrl: templateUrl,
            controller: 'FriendsCtr',
            controllerAs: 'person',
            resolve: {
                friendsResolve: function (personResource) {
                    return personResource.friends().$promise;
                }
            }
        });
}
