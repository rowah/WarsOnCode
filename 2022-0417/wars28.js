//We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

//You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

//All values will be positive integers or floats, or zero.
function plural(n) {
    // ...
    return (n != 1)
  }

//Given an array of integers.

////Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//If the input is an empty array or is null, return an empty array.
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

//Alternative solution 
function countPositivesSumNegatives(input) {
    var newArr = [];
    var positiveNumber = 0;
    var negativeNumber = 0;
    
    // Validate Input
    if (input === null || input.length === 0)
      return newArr;
    
    // Loop through array of Numbers 
    for (var i = 0; i < input.length; i++) {
      if (input[i] == 0)
       continue;
    
      // Count positives
      else if (input[i] > 0) 
        positiveNumber++;     
          
      // Sum negatives
      else if (input[i] < 0) 
        negativeNumber += input[i];
      
    }
    
    // Prepare Output
    newArr.push(positiveNumber);
    newArr.push(negativeNumber);
    
    return newArr;
  }

  //Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s){
    //#Happy Coding! ^_^
    return Math.round(((h * 60 + m + s/60)*60000))
    
  }

//This time no story, no theory. The examples below show you how to write function accum:

//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(str) {
    var letters = str.split('');
    var result = [];
    for (var i = 0; i < letters.length; i++) {
      result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
    return result.join('-');
  }


//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

//The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

//setAlarm(true, true) -> false
//setAlarm(false, true) -> false
//setAlarm(false, false) -> false
//setAlarm(true, false) -> true

function setAlarm(employed, vacation){
    if (employed && !vacation) return true
    else return false
  
  }
//OR
  function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false;
  }

  //Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.
function find_average(array) {
    return (array.length < 1 || array == undefined) ? 0 : ((array.reduce( ( prev, curr) => prev + curr, 0)) /array.length)
  }

//Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

  function squareArea(A){
    let area = ((2*A)/Math.PI)**2;
    return Number(area.toFixed(2))
    
  }