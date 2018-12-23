const Transaction = require(`./Transaction`)

class Membership {
    constructor(name, balance_minimum, balance, type) {
        this.account_number = 0
        this.name = name
        this.balance_minimum = balance_minimum
        this.balance = balance
        this.transaction = []
        this.type = type
        this.admin_rate = 0
    }

    debet(amount, note) {
        if (this.balance - this.admin_rate - amount < this.balance_minimum && this.balance - this.admin_rate - amount >= 0) {
            return `Saldo minimum anda tidak terpenuhi ketika melakukan transaksi`
        } else if (this.balance - this.admin_rate - amount < this.balance_minimum) {
            return `Saldo anda tidak cukup`
        } else {
            this.balance -= (this.admin_rate + amount)
            this.transaction.push(new Transaction(
                new Date().toISOString(), amount, `debet`, note
            ))
            return `Anda sukses menarik uang dari bank`
        }
    }

    credit(amount, note) {
        if (amount < this.admin_rate) {
            return `Belum memenuhi minimal uang yang dapat di setor`
        } else {
            this.balance += (amount - this.admin_rate)
            this.transaction.push(new Transaction(
                new Date().toISOString(), amount, `debet`, note
            ))
            return `Anda sukses menyimpan uang ke dalam bank`
        }
    }

    transfer(memberData, amount) {
        if (amount < 20000) {
            return `Transfer tidak boleh kurang dari 20000`
        }
        memberData.transaction.push(
            new Transaction(new Date().toISOString(), amount, `debit`, `Transfer to ${memberData.name}`
            ))
    }
}

class Platinum extends Membership {
    constructor(name, balance_minimum, balance, type) {
        super(name, balance_minimum, balance, type)
        this.balance_minimum = 50000
        this.admin_rate = 10000
    }
}

class Gold extends Membership {
    constructor(name, balance_minimum, balance, type) {
        super(name, balance_minimum, balance, type)
        this.balance_minimum = 30000
        this.admin_rate = 5000
    }
}

class Silver extends Membership {
    constructor(name, balance_minimum, balance, type) {
        super(name, balance_minimum, balance, type)
        this.balance_minimum = 10000
        this.admin_rate = 2000
    }
}


module.exports = { Platinum, Gold, Silver }