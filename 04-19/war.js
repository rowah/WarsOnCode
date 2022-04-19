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