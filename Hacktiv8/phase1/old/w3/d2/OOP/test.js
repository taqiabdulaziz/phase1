class Ninja {
    constructor(name, age , role) {
        this.name = name
        this.age = age
        this.gender = "male"
        this.role = role
    }

}

class Konoha{
    constructor() {
        this.ninjas = []
    }

    static addNinja(ninja) {
        this.ninjas.push(ninja)
    }
}

class Hokage extends Ninja{
    constructor(name, age, role, gold) {
        super(name, age, role)
        this.gold = gold
    }


}
let konoha = new Konoha()


let ninja = new Ninja("taqi", 21, "assassin")

Konoha.addNinja(ninja)



