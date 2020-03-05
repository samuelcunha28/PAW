/* MULTIPLICACAO
function multiplicacao(numero1, numero2) { 
    return numero1 * numero2; 
  }
  console.log(multiplicacao(10,5));
*/

/* MAIOR ARRAY
function longestString(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

let arr = ["BMW", "AUDI", "MERCEDES"];

console.log(longestString(arr));
*/

/* Upper case first letter
function upperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(upperCase("samuel"));
console.log(upperCase("marcelo"));
console.log(upperCase("Samuel"));
*/

/*
function mostFrequent(arr) {
    var mf = 1;
    var count = 0;
    var maior;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] == arr[j])
                count++;
            if (mf < count) {
                mf = count;
                maior = arr[i];
            }
        }
        count = 0;
    }
    return maior
}
let num = [3, 3, 2, 4, 9, 9, 9, 9, 3];
console.log(mostFrequent(num));
*/

/*
function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
var mail1 = "samuel@gmail.com";
var mail2 = "samuel@gmailcom";
console.log(validateEmail(mail1));
console.log(validateEmail(mail2));
*/

/*
function addZeroes(number) {
    var my_number = '' + number;

    if (my_number.length < 9) {
        while (my_number.length < 9) {
            my_number = '0' + my_number;
        }
        return my_number;
    } else
    console.log("Erro, numero excedeu os 9 digitos");
}
console.log(addZeroes(919110));
*/

/* Check if number is prime
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) 
        return false;
    }  
    return num > 1;
}
console.log(isPrime(3));
*/

/*
var m = 0.01;
var umCent = 0;
var doisCent = 0;
var cincoCent = 0;
var dezCent = 0;
var vinteCent = 0;
var cinquentaCent = 0;

while (m != 0) {
    if (m >= 0.50) {
        m -= 0.50;
        cinquentaCent += 1;
    } else if (m >= 0.20) {
        m -= 0.20;
        vinteCent += 1;
    } else if (m >= 0.10) {
        m -= 0.10;
        dezCent += 1;
    } else if (m > 0.05) {
        m -= 0.05;
        cincoCent += 1;
    } else if (m > 0.02) {
        m -= 0.02;
        doisCent += 1;
    } else if (m > 0.01) {
        m -= 0.01;
        umCent += 1;
    }
}
console.log(cinquentaCent + " moedas de 50 centimos ");
console.log(vinteCent + " moedas de 20 centimos ");
console.log(dezCent + " moedas de 10 centimos ");
console.log(cincoCent + " moedas de 5 centimos ");
console.log(doisCent + " moedas de 2 centimos ");
console.log(umCent + " moedas de 1 centimos ");
*/

/*
function palindromeWord(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
  console.log(palindromeWord("rir")); 
  */

/*
var getDaysInMonth = function (month, year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
};
// bissextile year verifies 4 in 4 years so 
console.log(getDaysInMonth(2, 2020)); // bissextile year  
console.log(getDaysInMonth(2, 2016)); // bissextile year 
console.log(getDaysInMonth(2, 2019)); // not bissextile year 
console.log(getDaysInMonth(12, 2012)); // december 2012 year
*/