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

//Make a program that filters a list of strings and returns a list with only your friends name in it.

//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

//i.e. friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends){
    return friends.filter(n => n.length === 4)
  }

  //OR
  function friend(friends){
  
    //Create new array called "myFriends" for add your friends
    var len = friends.length;
    let myFriends = [];
    
    
    for ( let i = 0; i < len; i++) {
          
         //Check for names with length equal to four and it is not a number
         if(friends[i].length == 4 && isNaN(friends[i])) {
            myFriends.push(friends[i]);
         }
        
    }
      
    return myFriends;
  }


  //You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

  //You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
  
  //Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

  function mergeArrays(arr1, arr2) {
    let res = [];
    arr1.concat(arr2).forEach(el => !res.includes(el) ? res.push(el) : 0);
    return res.sort( (a, b) => a - b);
  }


  //In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
  function findDifference(a, b) {
    //loading...
    return Math.abs((a[0]*a[1]*a[2]) - (b[0]*b[1]*b[2]))
  }
  //OR
  function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }