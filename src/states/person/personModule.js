import './person.scss'

import angular          from 'angular';
import angularUiRouter  from 'angular-ui-router';
import angularResource  from 'angular-resource';
              
import PersonCtr        from './personCtr';
import personSrv        from './personSrv';
import personRoutes     from './personRoutes';
import personResource   from './personResource';

import personGeneral    from './general/generalModule'
import personFriends    from './friends/friendsModule'

import personHeader     from '../../components/personHeader/personHeader'
import personPhoto      from '../../components/personPhoto/personPhoto'


export default angular.module('person', [
        angularUiRouter,
        angularResource,
        personHeader,
        personPhoto,

        personGeneral,
        personFriends
    ])
    .config(personRoutes)
    .controller('PersonCtr', PersonCtr)
    .factory('personResource', personResource)
    .service('personSrv', personSrv)
    .name;
