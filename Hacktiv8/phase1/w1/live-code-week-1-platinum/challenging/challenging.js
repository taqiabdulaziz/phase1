function challenging(num) {
    let binerArr = []
    let combination = Math.pow(2, num*2) -1
    let strBiner = ''
    let newBinerArr = []
    console.log(combination);
    // console.log(combination);

    for (let i = 0; i <= combination; i++) {
        binerArr.push([i.toString(2)])
    }

    for (let i = 0; i < binerArr.length; i++) {
        while (binerArr[i].length < num * 2) {
            binerArr[i] = `0` + binerArr[i]
        }
    }
    for (let i = 0; i < binerArr.length; i++) {
        if (binerArr[i].length > num * 2) {
            binerArr[i] = binerArr[i].slice(1)
        }
    }

    for (let i = 0; i < binerArr.length; i++) {
        strBiner += `,`
        for (let j = 0; j < binerArr[i].length; j++) {
            if (binerArr[i][j] == `0`) {
                strBiner += `(`
            } else {
                strBiner += `)`
            }
        }
    }
    strBiner = strBiner.split(`,`)
    strBiner = strBiner.slice(1)

    for (let i = 0; i < strBiner.length; i++) {
        let left = 0
        let right = 0
        for (let j = 0; j < strBiner[i].length; j++) {
            if (strBiner[i][j] == `(`) {
                left++
            } else {
                right++
            }
        }
        if (left == right && checkJumlah(strBiner[i])) {
            newBinerArr.push(strBiner[i])
        }
    }
    
    return newBinerArr

}

function checkJumlah(array) {
    let jumlah = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == `(`) {
            jumlah++
        } else {
            jumlah--
        }
        if (jumlah < 0) {
            return false
        }
    }
    return true
}

console.log(challenging(process.argv[2]));

