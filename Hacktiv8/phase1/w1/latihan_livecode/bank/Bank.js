class Bank {
    constructor(name) {
        this.name = name
        this.members = []
    }

    register(userData) {
        userData.account_number = this.members.length+1
        this.members.push(userData)
        console.log(`Selamat datang ke ${this.name} ${userData.name}, Nomor akun anda adalah ${this.members.length}`);
    }
}

module.exports = { Bank }