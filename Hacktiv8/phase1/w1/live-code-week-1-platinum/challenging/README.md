# Generate Parentheses

Buatlah sebuah fungsi yang mampu menghasilkan semua kombinasi kurung buka dan kurung tutup yang valid sesuai dengan jumlah pasangan tanda kurung yang diinginkan.

Hint: Kamu bebas menggunakan metode apapun, dan manfaatkan prinsip kombinasi di matematika!

Contoh kombinasi valid:

((()))

()()()

()(()())

Contoh kombinasi tidak valid:

)()

()(
  
(()();

Contoh:
```javascript
generateParen(3) // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
generateParen(4) // [ '(((()))',
  '((()()))',
  '((())())',
  '((()))()',
  '(()(()))',
  '(()()())',
  '(()())()',
  '(())(())',
  '(())()()',
  '()((()))',
  '()(()())',
  '()(())()',
  '()()(())',
  '()()()()' ]
```