const { Bank } = require(`./Bank`)
const { Platinum, Gold, Silver } = require(`./Membership`)

let dimas = new Platinum(`Dimas`, 50000,0, `Platinum`)
let semmi = new Gold(`Semmi Verian`, 30000, 0, `Gold`)
console.clear()

//RELEASE 0
console.log(`FIRST TRANSACTION`);
console.log(dimas.credit(500000, `First credit`));

console.log(dimas.transaction);

//RELEASE 1
console.log(`CREATE BANK AND REGISTER MEMBER`);
let yudhistiraBank = new Bank(`Yudhistira Bank`)
yudhistiraBank.register(dimas)
yudhistiraBank.register(semmi)

console.log(yudhistiraBank.members);
console.log(dimas.credit(100000));
console.log(dimas.credit(1000));
console.log(dimas.debet(200000, `Beli Keyboard`));
console.log(dimas.debet(480000, `Beli Keyboard`));
console.log(dimas.debet(600000, `Beli Keyboard`));
console.log(dimas.transaction);











