# One Row Keys

> ⏰ Time Estimation: ~90 mins

## Release 0
![Keyboard Layout](https://jasmcole.files.wordpress.com/2017/06/qwerty-e1496586489808.png?w=1200)  
Keyboard QWERTY memiliki layout seperti gambar di atas.
- Baris pertama: `'QWERTYUIOP'`
- Baris kedua: `'ASDFGHJKL'`,
- Baris ketiga: `'ZXCVBNM'`

Buatlah sebuah function untuk mengetahui kata apa saja di dalam `Array` yang bisa diketik dengan menggunakan **hanya satu baris** dan **satu huruf hanya bisa dipakai sekali**.

### Contoh:
```javascript
console.log(oneRowKeys(['Roti', 'Gelas', 'Perut', 'Potong']));
// [ 'Roti', 'Perut' ]

console.log(oneRowKeys(['Kakak', 'Adik', 'Bunda']));
// []

console.log(oneRowKeys(['Kopi', 'Topi']));
// [ 'Topi' ]
```
