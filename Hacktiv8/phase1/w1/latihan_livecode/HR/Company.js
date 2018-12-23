class Company {
    constructor(companyName, limit) {
        this.companyName = companyName
        this.limit = limit
        this.people = []
        this.loggedInUser = []
    }

    addPeople(userData) {
        userData.forEach(element => {
            element.id = this.people.length + 1
            this.people.push(element)
        });
        return `Succesfully add ${userData.length} people`
    }

    login(userName) {
        for (let i = 0; i < this.people.length; i++) {
            if (this.people[i].name == userName) {
                this.loggedInUser = [this.people[i]]
                console.log(`Welcome, ${userName}`);
                break;
            }
        }
    }

    showSalaries() {
        if (this.loggedInUser.constructor.name) {
            for (let i = 0; i < this.people.length; i++) {
                this.people[i].constructor.name != `Student` && console.log(`Name: ${this.people[i].name}, Salary: ${this.people[i].salary}`);
            }
        } else {
            console.log(`You don't have permission to access this feature`);
        }
    }

    mySalary() {
        this.loggedInUser.length > 0 ?
            this.loggedInUser[0].salary == undefined ?
                console.log(`You don't have salary yet`) :
                console.log(`Your salary is ${this.loggedInUser[0].salary}`) :
            console.log(`Gak ada orang!`);
    }

    showPeople() {
        let result = {}

        for (let i = 0; i < this.people.length; i++) {
            result[this.people[i].constructor.name] == undefined ?
                result[this.people[i].constructor.name] = [this.people[i]] :
                result[this.people[i].constructor.name].push(this.people[i])
        }
        console.log(result);
    }
}

module.exports = Company