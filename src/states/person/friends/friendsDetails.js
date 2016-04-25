
import './friendsDetails.scss';
import templateUrl from './friendsDetails.html';


function friendsDetails ($filter) {
    return {
        templateUrl: templateUrl,
        restrict: 'EA',
        replace: true,
        scope: {
            friend: '='
        },
        link: lnk,
        controller: ctr
    };

    function ctr ($scope) {
        $scope.showDetails = false;
        $scope.toggleShowDetails = function () {
            $scope.showDetails = !$scope.showDetails;
        };
    }

    function lnk (scope, elem, attrs) {
        
    }
}
friendsDetails.$inject = ['$filter'];


export default friendsDetails;
