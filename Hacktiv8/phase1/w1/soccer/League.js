class League {
    constructor(country, ceo) {
        this.country = country
        this.ceo = ceo
        this.clubs = []
    }

    addClub(clubData) {
        this.clubs.push(clubData)
    }

    members() {
        if (this.clubs.length == 0) {
            return `No club available`
        } else {
            console.log(`List club in this League:`);
            for (let i = 0; i < this.clubs.length; i++) {
                console.log(
                    `${i+1}. ${this.clubs[i].name}, stadium: ${this.clubs[i].stadium}`
                );
                
            }
        }
    }
}

class PremierLeague extends League {
    constructor() {
        super(`United Kingdom`, `Richard Scudamore`)
    }
}

class LaLiga extends League {
    constructor() {
        super(`Spain`, `Javier Gomez`)
    }
}
module.exports = { PremierLeague, LaLiga }