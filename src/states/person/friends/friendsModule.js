import './friends.scss'

import angular                                  from 'angular';
import angularUiRouter                          from 'angular-ui-router';
                                                    
import FriendsCtr                               from './friendsCtr';
import tagMarker                                from './tagMarker'
import friendsDetails                           from './friendsDetails'
import routes                                   from './friendsRoutes';
import { searchInNamesAndPhones, tabFilter }    from './friendsFilters';



export default angular.module('person.friends', [
        angularUiRouter
    ])
    .config(routes)
    .filter('tabFilter', tabFilter)
    .filter('searchInNamesAndPhones', searchInNamesAndPhones)
    .controller('FriendsCtr', FriendsCtr)
    .directive('friendsDetails', friendsDetails)
    .directive('tagMarker', tagMarker)
    .name;
