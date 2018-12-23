class Cookies {
    constructor(namaKue, duration) {
        this.namaKue = namaKue
        this.duration = duration
    }
}

class Microwave{
    constructor(name) {
        this.name = name
    }

    cook(){
        for (let i = 0; i < this.name.duration; i+=5) {
            if (i < 20) {
                console.log(
                    `${this.name.namaKue}, menit ke i : Mentah`
                );
            } else if (i == 20) {
                console.log(
                    `${this.name.namaKue}, menit ke i : Mateng`
                );
            } else if (i == 15) {
                console.log(
                    `${this.name.namaKue}, menit ke i : Hampir Mateng`
                );
            } else if (i > 20) {
                console.log(
                    `${this.name.namaKue}, menit ke i : Mentah`
                );
            }
            
            
        }
    }
}

let kueCoklat = new Cookies("kue coklat", 20)
let kueKacang = new Cookies()
let kueKeju = new Cookies()
let make_kueCoklat = new Microwave(kueCoklat)
console.log(make_kueCoklat.cook());

console.log(make_kueCoklat);

