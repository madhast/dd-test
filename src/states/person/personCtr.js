
export default class PersonCtr {
    constructor ($state, $timeout, personSrv) {
        if ($state.current.name == 'person') {
            $state.go('person.general');
        }

        this.data = personSrv.getBio();
    }
}

PersonCtr.$inject = ['$state', '$timeout', 'personSrv'];
