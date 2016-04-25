
export default function personResource ($resource) {

    return $resource('/api/person-data.json', {}, {
        general: { url: '/api/general-data.json', method: 'GET', params: {}, isArray: false },
        friends: { url: '/api/friends-data.json', method: 'GET', params: {}, isArray: false }
    });
}

personResource.$inject = ['$resource'];
