
function searchInNamesAndPhones () {
    return function (items, search) {
        var match = new RegExp(search, 'i');
        return items.filter((item) => {
            if (match.test(item.alias)) return true;
            return item.contacts.some((item) => {
                if (match.test(item)) return true;
            });
        });
    }
}

function tabFilter () {
    return function (items, tab) {
        return items.filter((item) => {
            if (tab === 'all') return true;
            if (tab === 'phone') {
                return item.contacts.length;
            } else {
                return item.tags.some((tag) => {
                    return tag.kind === tab;
                });
            }
        });
    }
}


export { searchInNamesAndPhones, tabFilter }
