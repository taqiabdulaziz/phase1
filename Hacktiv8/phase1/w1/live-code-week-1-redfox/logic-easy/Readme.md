DOMINO

RedFox akan bermain kartu domino bersama temannya. Permasalahannya adalah RedFox masih awam/pemula dalam permainan ini. RedFox mendapatkan satu kesempatan untuk meminta saran kepada orang lain kartu mana yang harus dia dikeluarkan. Yuk bantu RedFox, syaratnya adalah
kartu yang disarankan untuk keluar adalah kartu yang salah satu angkanya sama dengan salah satu angka pada kartu yang ada di "deck"/"meja"
jumlah kartu (index 0 + index 1) tersebut merupakan jumlah terbesar dari beberapa kartu yang memenuhi requirement pertama(jika ada)
jika tidak terdapat kartu yang bisa dikeluarkan maka beri tahu RedFox untuk "tutup 1 kartu"

Buatlah function dominoCard yang menerima 2 parameter berupa array.

Requirement:
Parameter pertama merupakan nested array dan parameter kedua merupakan array biasa.
Parameter pertama merupakan kartu domino yang ada ditangan RedFox
Parameter kedua merupakan kartu yang sedang ada di "deck"/"meja"
Jika ada kartu yang disarankan maka output: 'Keluarkan kartu [x,y]'
Jika tidak ada kartu yang disarankan maka output: 'tutup 1 kartu'


Contoh driver code:
dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]) //"keluarkan kartu [3,4]"
dominoCard([[2,4],[6,6],[3,6]],[1,5]) //”tutup 1 kartu”
