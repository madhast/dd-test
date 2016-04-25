
import angular      from 'angular';
import tempalateUrl from './personHeader.html';
import './personHeader.scss';


function personHeader ($filter) {
    return {
        templateUrl: tempalateUrl,
        restrict: 'EA',
        replace: true,
        scope: {
            alias: '=',
            birthDate: '='
        },
        link: lnk,
        controller: ctr,
        controllerAs: 'personHeader'
    };

    function ctr ($scope) {
        $scope.age = getAge();

        function getAge () {
            let birth = new Date($scope.birthDate * 1000).getFullYear(),
                now   = new Date().getFullYear();
            
            return now - birth;
        }
    }

    function lnk () {
        // console.log('component.personHeader lnk');
    }
}

personHeader.$inject = ['$filter'];


export default angular.module('component.personHeader', [])
    .directive('personHeader', personHeader)
    .name;
