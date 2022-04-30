//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    var vowelsCount = 0;
    for(let i=0;i < str.length; i++) {
      if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        vowelsCount ++
  }
  }
    
    // enter your majic here
    
    return vowelsCount;
  }

//Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

//Task
//Write a function that returns both the minimum and maximum number of the given list/array.
  function minMax(arr){
    arr.sort((a, b) => a-b)
    return [arr[0],arr[arr.length-1]]; // fix me!
  }
  
  minMax([2334454,5])