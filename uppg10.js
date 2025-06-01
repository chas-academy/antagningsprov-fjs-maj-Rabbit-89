function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

  
// let bigEven = [];
// let smallOdd = [];
// let other = [];

// for (let number of numbers){
//     if (number %2 === 0 && number >10 ){
//         bigEven.push(number);
//     } else if (number %2 !==0 && number < 10){
//         smallOdd.push(number);
//     } else {
//         other.push(number);
//     }
// }

// console.log( " bigEven " + bigEven, "\n smallOdd " + smallOdd, "\n other " + other);
    function sortNumbers(arr) {
  const bigEven = []; // Tal > 10 och jämna
  const smallOdd = []; // Tal < 10 och udda
  const other = []; // Alla andra tal

  for (const num of arr) {
    if (num > 10 && num % 2 === 0) {
      bigEven.push(num);
    } else if (num < 10 && num % 2 !== 0) {
      smallOdd.push(num);
    } else {
      other.push(num);
    }
  }

  return { bigEven, smallOdd, other };
}

const result = sortNumbers(numbers);
console.log(result);
  
  }
  
  module.exports = { uppg10 };
  