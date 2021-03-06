//Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

//As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

//You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

//You are given 5 variables;

//sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

//sharkSpeed = how fast it can move in metres/second.

//pontoonDistance = how far you need to swim to safety in metres.

//youSpeed = how fast you can swim in metres/second.

//dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

//The pontoon, you, and the shark are all aligned in one dimension.

//If you make it, return "Alive!", if not, return "Shark Bait!".

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let myTime = pontoonDistance/youSpeed;
    let sharkTime = sharkDistance/sharkSpeed;
    if(dolphin === true) {
        sharkTime *= 2
    }
    return myTime > sharkTime ? "Shark Bait!" : "Alive!"

}

//OR
function shark(pDist, sDist, speedMe, speedShark, dolphin){
    if (dolphin){
      speedShark /= 2;
    }
    
    return pDist / speedMe < sDist / speedShark ? "Alive!" : "Shark Bait!"
  }
  function shark(pontoonDistance, sharkDistance, yourSpeed, sharkSpeed, dolphin){
    if (dolphin) sharkSpeed = sharkSpeed/2;
    let yourTime = pontoonDistance/yourSpeed;
    let sharksTime = sharkDistance/sharkSpeed;
    
    return yourTime < sharksTime ? "Alive!": "Shark Bait!"
  }

//We need a function that can transform a string into a number. What ways of achieving this do you know?

//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
var stringToNumber = function(str){
    // put your code here
    return str *1
  //   return null;
  }
  //OR
  var stringToNumber = function(str){
    return parseInt(str);
  }

  var stringToNumber = function(str){
    // put your code here
    return Number(str);
  }