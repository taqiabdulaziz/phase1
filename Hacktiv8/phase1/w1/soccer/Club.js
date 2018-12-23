const Player = require(`./Player`)

class Club {
    constructor(name, stadium, location, manager, budgetTransfer, player) {
        this.name = name
        this.stadium = stadium
        this.location = location
        this.manager = manager
        this.budgetTransfer = budgetTransfer
        this.player = []
    }

    addPlayer(playerData) {
        playerData.currentClub = this.name
        this.player.push(playerData)
    }

    buyPlayer(playerData, clubData) {
        if (clubData == null || clubData == undefined && this.checkMoney(playerData.transferFee)) {
            playerData.currentClub = this.name
            this.player.push(playerData)
            this.budgetTransfer -= playerData.transferFee
            console.log(`You buy ${playerData.playerName} with transfer fee $${playerData.transferFee}, remaining budget: ${this.budgetTransfer}`);
        } else {
            let check = false
            for (let i = 0; i < clubData.player.length; i++) {
                if (clubData.player[i] == playerData) {
                    if (!this.checkMoney(playerData)) {
                        check = true
                        break;
                    } else {
                        playerData.currentClub = this.name
                        this.player.push(playerData)
                        this.budgetTransfer -= playerData.transferFee
                        console.log(`You buy ${playerData.playerName} with transfer fee $${playerData.transferFee}, remaining budget: ${this.budgetTransfer}`);
                        delete clubData.player[this.player.indexOf(playerData) - 1]
                        let newData = clubData.player.filter(function (data) {
                            return data !== undefined
                        })
                        clubData.player = newData
                        check = true
                    }
                }
            }
            check == false && console.log(`There is no Player with name ${playerData.playerName} in ${clubData.name}`);

        }
    }

    checkMoney(playerData) {
        if (this.budgetTransfer - playerData.transferFee >= 0) {
            return true
        } else {
            console.log(`Budget not sufficient to buy ${playerData.name}. You club need extra $${Math.abs(this.budgetTransfer - playerData.transferFee)} to buy this player`);
            return false
        }
    }

}

class RealMadrid extends Club {
    constructor() {
        super('Real Madrid', `Santuago Bernabeu`, `Madrid`, `Zinedine Zidane`, 10000000000)
    }
}

class Barcelona extends Club {
    constructor() {
        super(`F.C. Barcelona`, `Camp Nou`, `Barcelona`, `Ernestor Valverde`, 20000000)
    }
}

class Liverpool extends Club {
    constructor() {
        super(`Liverpool F.C.`, 'Anfield', 'Liverpool', `Jurgen Kloop`, 50000000)
    }
}

class Arsenal extends Club {
    constructor() {
        super('Arsenal F.C.', 'Emirates Stadium', 'London', `Arsene Wenger`, 35000000)
    }
}

module.exports = { RealMadrid, Barcelona, Liverpool, Arsenal }