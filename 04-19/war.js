//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//For example:

//summation(2) -> 3
//1 + 2

//summation(8) -> 36
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
    // Code here
    let sum = 0;
    for (let i=1; i<=num; i++) {
      sum += i;
  } return sum
  }


  //Can you find the needle in the haystack?

//Write a function findNeedle() that takes an array full of junk but containing one "needle"

//After your function finds the needle it should return a message (as a string) that says:

//"found the needle at position " plus the index it found the needle, so:

//findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
//should return "found the needle at position 5" (in COBOL "found the needle at position 6")
function findNeedle(haystack) {
  // your code here
  return `found the needle at position ${haystack.indexOf('needle')}`
}

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(num) {
  // your code........
//   if(num % 2 === 0) {
//     return num * 8
// } else {return num * 9}
return num % 2 === 0 ? num*8 : num*9
}

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(item => typeof item === 'number');
}



//Complete the function which converts a binary number (given as a string) to a decimal number.

const binToDec = bin => parseInt(bin,2);

//OR
function binToDec(bin){
  let arr = bin.split('').reverse();
   let num = 0;    

   for (let i = 0; i<arr.length; i++){
       if(arr[i]==='1' || arr[i]==='0'){
           num+=arr[i]*Math.pow(2,i);
       }else{
           throw 'Not bin num'
       }
   }
   return num;
}


//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//Examples:

//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false

function solution (str, ending) {
  return str.endsWith(ending)
}



//25/04/2022
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//Note: The function accepts an integer and returns an integer

function squareDigits(num){
  let numString = num + '';
   let newNum = ''
   for(i=0; i<numString.length; i++){
     newNum += Number(numString[i])**2
 }
   return Number(newNum)
 }
//A better solution than mine using methods
 function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}


//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  //code here
  var array = String(n).split("").reverse().map(Number);
  return array
}


/////Write a function called repeatStr which repeats the given string string exactly n times.
function repeatStr (n, s) {
  let newS = ''
  for(i=1; i<=n; i++) {
  newS += s
    
} return newS
}
//shorter codes using methods
function repeatStr (n, s) {
  return s.repeat(n);
}
//arrow
repeatStr = (n, s) => s.repeat(n)



// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

//Array can contain numbers or strings. X can be either.

//Return true if the array contains the value, false if not.
function check(a, x) {
  // your code here
  return a.includes(x)
}


//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

//Example:

//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

//None of the arrays will be empty, so you don't have to worry about that!
function removeEveryOther(arr){
  //your code here
  let newArr = [];
  for(i=0; i<arr.length; i+=2) {
    return arr.push[i]
}
}
//Found shorter solutions
const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);