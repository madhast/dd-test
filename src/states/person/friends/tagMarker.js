
// import angular      from 'angular';
import templateUrl from './tagMarker.html';


function tagMarker ($filter) {
    return {
        templateUrl: templateUrl,
        restrict: 'EA',
        replace: true,
        scope: {
            tags: '=',
            current: '='
        },
        link: lnk,
        controller: ctr
    };

    function ctr ($scope) {
        $scope.isTag = true;
    }

    function lnk (scope, elem, attrs) {
        scope.current = attrs.current;
        scope.isTag = scope.tags.some((tag) => {
            if (tag.kind === scope.current) return true;
        });
    }
}

tagMarker.$inject = ['$filter'];


export default tagMarker;
