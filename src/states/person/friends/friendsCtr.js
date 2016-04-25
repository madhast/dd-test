
export default class FriendsCtr {
    constructor (personResource, personSrv, friendsResolve) {
        let personBio = {
            avatarURL: friendsResolve.avatarURL,
            birthDate: friendsResolve.birthDate,
            alias: friendsResolve.alias
        };

        if (!personSrv.isBio()) {
            personSrv.setBio(personBio);
        }

        this.friends = friendsResolve.friends;
        this.activeFilterTab = 'all';
    }

    setActiveFilterTab (tab) {
        this.activeFilterTab = tab;
    }

    filterTabCounter (tab) {
        var counter = 0;

        if (tab === 'all') counter = this.friends.length;
        if (tab === 'phone') {
            this.friends.forEach((item) => {
                if (item.contacts.length) counter++;
            });
        } else {
            this.friends.forEach((item) => {
                item.tags.forEach((item) => {
                    if (item.kind === tab) counter++;
                });
            });
        }

        return counter;
    }

    hasTag (tag) {
        
    }
}

FriendsCtr.$inject = ['personResource', 'personSrv', 'friendsResolve'];
