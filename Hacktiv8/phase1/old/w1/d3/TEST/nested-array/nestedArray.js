function nestedArray(r, c) {
    var alph = 'abcdefghijklmnopqrstuvwxyz'
    var arr = []
    var arrTemp = []
    var counter = 0
    for (let i = 0; i < r; i++) {
        while (arrTemp.length < c) {
            counter++
            arrTemp.push(alph[Math.floor(Math.random()*25)])               
        }

        arr.push(arrTemp)
        arrTemp = []
    }

    

    return arr
}

console.log(nestedArray(4, 4));
