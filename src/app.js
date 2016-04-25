import 'normalize.css';
import 'flexboxgrid';
import './app.scss';

import angular          from 'angular';
import angularResource  from 'angular-resource';
import angularUiRouter  from 'angular-ui-router';

import './vendors/angular-locale_ru'

import config           from './app.conf'
import icon             from './components/icon/icon'

import person           from './states/person/personModule'


angular.module('app', [
    angularUiRouter,
    angularResource,

    icon,

    person
]);


angular.module('app').config(config);
