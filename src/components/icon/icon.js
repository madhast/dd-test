import '../../../assets/svg-icons/question-circle.svg'
import '../../../assets/svg-icons/graduation-hat.svg'
import '../../../assets/svg-icons/odnoklassniki.svg'
import '../../../assets/svg-icons/cross-circle.svg'
import '../../../assets/svg-icons/smartphone.svg'
import '../../../assets/svg-icons/vkontakte.svg'
import '../../../assets/svg-icons/briefcase.svg'
import '../../../assets/svg-icons/magnifier.svg'
import '../../../assets/svg-icons/envelope.svg'
import '../../../assets/svg-icons/warning.svg'
import '../../../assets/svg-icons/heart.svg'
import '../../../assets/svg-icons/users.svg'
import '../../../assets/svg-icons/earth.svg'
import '../../../assets/svg-icons/phone.svg'
import '../../../assets/svg-icons/phone-handset.svg'
import '../../../assets/svg-icons/list.svg'
import '../../../assets/svg-icons/map-marker.svg'
import '../../../assets/svg-icons/map.svg'
import '../../../assets/svg-icons/cog.svg'

import angular from 'angular';
import templateUrl from './icon.html';
import './icon.scss';


function icon ($timeout) {
    return {
        templateUrl: templateUrl,
        templateNamespace: 'svg',
        restrict: 'E',
        replace: true,
        scope: { },
        link: lnk
    };

    function lnk (scope, elem, attrs) {
        scope.name = attrs.name;
    }
}
icon.$inject = ['$timeout'];


export default angular.module('component.icon', [])
    .directive('icon', icon)
    .name;
