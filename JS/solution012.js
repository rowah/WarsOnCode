//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

//For example:

//solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
//solution(null); // should return []



function sortNums(nums) {
    if (nums === null) {
        return []
    } else { return nums.sort((a, b) => a - b) }
}


// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b){
    if(a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) {
        return -1
    } else if(a.toLowerCase() === a && b.toLowerCase() === b || a.toUpperCase() === a && b.toUpperCase() ===b ) {
        return 1
    } else return 0
}

