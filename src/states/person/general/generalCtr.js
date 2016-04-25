
export default class GeneralCtr {
    constructor (personResource, personSrv, generalResolve) {
        let personBio = {
            avatarURL: generalResolve.avatarURL,
            birthDate: generalResolve.birthDate,
            alias: generalResolve.alias
        };

        if (!personSrv.isBio()) {
            personSrv.setBio(personBio);
        }

        this.recommendations = false;

        this.general = generalResolve;

        this.marriageStatus = personSrv.agregateMarriageStatus(this.general.pages);
        this.education = personSrv.agregateEducation(this.general.pages);
        this.devices = personSrv.agregateDevices(this.general.pages);
        this.cities = personSrv.agregateCities(this.general.pages);
        this.emails = personSrv.agregateEmails(this.general.pages);
        this.phones = personSrv.agregatePhones(this.general.pages);
        this.salary = personSrv.agregateSalary(this.general.pages);
        this.jobs = personSrv.agregateJobs(this.general.pages);

        console.log('marriageStatus: ', this.marriageStatus);
        console.log('education: ', this.education);
        console.log('devices: ', this.devices);
        console.log('cities: ', this.cities);
        console.log('emails: ', this.emails);
        console.log('phones: ', this.phones);
        console.log('salary: ', this.salary);
        console.log('jobs: ', this.jobs);

        console.log('universities: ', this.general.universities);
        console.log('schools: ', this.general.schools);
    }

    toggleRecomendations () {
        this.recommendations = !this.recommendations;
    }
}

GeneralCtr.$inject = ['personResource', 'personSrv', 'generalResolve'];
