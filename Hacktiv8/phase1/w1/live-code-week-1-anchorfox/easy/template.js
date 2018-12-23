function generateCardInHand() {
  var tipeCard = ['K','H','S','W']
  var numberCard= ['2','3','4','5','6','7','8','9','10','J','Q','K']
  var allCard = []
  var generateCard = []
  for(let i = 0; i < tipeCard.length; i++) {
    for(let j = 0; j < numberCard.length; j++) {
      allCard.push(numberCard[j]+tipeCard[i])
    }
  }
  var status = false
  // while(status!== true){
    for (let i = 0; i < 5; i++) {
      var randomCard = Math.floor(Math.random() * (allCard.length-1)) + 1 
      generateCard.push(allCard[randomCard])
    }
    console.log(generateCard)
    var count = 0
    for (let i = 0; i < generateCard.length; i++) {
      for (let j = i+1; j < generateCard.length; j++) {
        if (generateCard[i].slice(0,1) === generateCard[j].slice(0,1)) {
          count += 1
        }
      }
    }
    if(count === 0) {
      return 'Tidak ada pasang kartu yang sama'
    }
    return `Ada ${count} kartu yang sama`
}
console.log(generateCardInHand())
