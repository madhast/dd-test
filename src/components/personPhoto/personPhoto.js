
import angular from 'angular';
import tempalateUrl from './personPhoto.html';
import './personPhoto.scss';


function personPhoto () {
    return {
        templateUrl: tempalateUrl,
        restrict: 'EA',
        replace: true,
        scope: {
            url: '='
        },
        link: lnk,
        controller: ctr,
        controllerAs: 'personPhoto'
    };

    function ctr ($scope) {
        $scope.fullScreen = false;
        $scope.toggleFullScreen = function () {
            $scope.fullScreen = !$scope.fullScreen;
        }
    }

    function lnk (scope, elem, attrs) {
        // console.log('component.personPhoto lnk');
    }
}


export default angular.module('component.personPhoto', [])
    .directive('personPhoto', personPhoto)
    .name;
