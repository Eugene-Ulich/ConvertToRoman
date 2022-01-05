function convertToRoman(num) {
    let arrOfDigits = num.toString().split('');
   
    const rmnSmbl = function (index, repeat=1) {
      const romanSymbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
      let romanLiteral = '';
      for (let i=0; i<repeat; i++) {
        romanLiteral += romanSymbols[index]
      }
      return romanLiteral;
    }
   
    function romanForming (digit, index) {
      let counter = 0;
   
      const millCheck = (digit, symbolRank=6, addUp=1) => 
       (index < symbolRank)
       ? (digit>4 && digit<9)
         ? rmnSmbl(index+1)+rmnSmbl(index, digit-5)
         : rmnSmbl(index)+rmnSmbl(index+addUp)
       : rmnSmbl(index, digit);
   
      switch (digit) {
        case 3:
         counter++;
        case 2:
         counter++;
        case 1:
         counter++;
         return rmnSmbl(index, counter);
         break;
        case 8:
         counter++;
        case 7:
         counter++;
        case 6:
         counter++;
        case 5:
         counter++;
        case 4:
         counter+=4;
         return millCheck(counter);
         break;
        case 9:
         return millCheck(9, 5, 2);
      }
    }
   
    let returnValue = arrOfDigits.map( (n, i, arr) => {
      n -= 0;
      switch (arr.length-i-1) {
        case 0:
         return romanForming(n, 0);
         break;
        case 1:
         return romanForming(n, 2);
         break;
        case 2:
         return romanForming(n, 4);
         break;
        default:
         return romanForming(n, 6);
      }
      }).join('');
      
      console.log(returnValue);
      return returnValue
   }
   
//   convertToRoman(36);