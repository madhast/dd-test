
import _ from 'lodash'

export default class personSrv {
    constructor () {
        this.data = {};
        this.data.bio = null;
    }

    setBio (bio) {
        this.data.bio = bio;
    }
    getBio () {
        return this.data;
    }
    isBio () {
        return !!this.data.bio;
    }

    agregateMarriageStatus (pages) {
        let result = pages.map(function (network) {
            return network.marriageStatus;
        });

        return _.compact(result);
    }
    agregateEducation () {
        
    }
    agregateDevices (pages) {
        let result = [];

        pages.forEach(function (network) {
            result = result.concat(network.devices);
        });

        return _.uniq(result);
    }
    agregateCities (pages) {
        let result = [];

        pages.forEach(function (network) {
            result = result.concat(network.cities);
        });

        return _.uniq(result);
    }
    agregateEmails (pages) {
        let result = [];

        pages.forEach(function (network) {
            result = result.concat(network.emails);
        });

        return _.uniq(result);
    }
    agregatePhones (pages) {
        let result = [];

        pages.forEach(function (network) {
            result = result.concat(network.phones);
        });

        return _.uniq(result);
    }
    agregateSalary (pages) {
        let result = pages.map(function (network) {
            return network.salary;
        });

        return _.compact(result);
    }
    agregateJobs (pages) {
        let result = [];

        pages.forEach(function (network) {
            result = result.concat(network.jobs);
        });

        return _.uniqWith(result, _.isEqual);
    }
}
