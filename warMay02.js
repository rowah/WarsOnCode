//Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

//Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

//If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
    //your code goes here   
   if(n>=10) {
     return "Great, now move on to tricks"
 } else if(n<10) {
   return "Keep at it until you get it"
 } else {return}
 }

 //This function should test if the factor is a factor of base.

//Return true if it is a factor or false if it is not.
function checkForFactor (base, factor) {
    // code here
    return (base % factor == 0) ? true : false
  }

//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
  
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
      
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }
    
    return false;
  
  }
  //OR
  var n = pin.length;
  if( n != 4 && n != 6)
      return false;
  for (var i in pin)
      if (pin[i] > '9' || pin[i] < '0')
          return false;
  return true;
}
//For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

//Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
const bingo = a => [2,7,9,14,15].every(e => a.includes(e)) ? 'WIN' : 'LOSE';

function bingo(a) {
    return [2,9,14,7,15].every(x => a.includes(x)) ? "WIN" : "LOSE"
  }

  function bingo(a) {
    // your winning code here
    let winningNos = [2,7,9,14,15]
    for (let i = 0; i<winningNos.length; i++) {
      if(!a.includes(winningNos[i])) {
        return 'LOSE'
  }
 }
return 'WIN'
  }


  //Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
  function reverseWords(str) {
    // Go for it
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
  }
  


//Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
  function alternateCase(s) {
    let text = s.split('')
    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i].toLowerCase()) {
          text[i] = text[i].toUpperCase();
        } else {
          text[i] = text[i].toLowerCase();
        }
    }
    return text.join('');
  }
//Shorter
alternateCase = (s) => s.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('');


//Count the number of divisors of a positive integer n.
function getDivisorsCnt(n){
    // todo
  let numOfDivisors = 0;
  for(let i=1; i <= n; i++) {
    if(n % i ==0) {
      numOfDivisors ++
}
} return numOfDivisors
}