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