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