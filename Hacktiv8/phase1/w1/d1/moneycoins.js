function convertToCoin(amount) {
    let coins = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
    let result = []

    for (let i = 0; i < coins.length; i++) {
        if (amount - coins[i] >= 0) {
            amount -= coins[i]
            result.push(coins[i])
            i--
        }
    }
    console.log(result);
    
}

console.log(
    convertToCoin(543)
);
console.log(
    convertToCoin(7752)
);
console.log(
    convertToCoin(37454)
);

