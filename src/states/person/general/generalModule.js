import './general.scss'

import angular          from 'angular';
import angularUiRouter  from 'angular-ui-router';

import GeneralCtr       from './generalCtr'
import routes           from './generalRoutes'


export default angular.module('person.general', [
        angularUiRouter
    ])
    .config(routes)
    .controller('GeneralCtr', GeneralCtr)
    .name;
