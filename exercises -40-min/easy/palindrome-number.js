/* Given an integer x, return true if x is a 
palindrome
, and false otherwise.
 */

function isPalindrome(x) {
    if (x < 0) return false
    var y = x.toString().split("").map(Number)
    var z = x.toString().split("").map(Number)
    console.log(y)
    var reversed_y = z.reverse()
    console.log(reversed_y, y)
    if (y === reversed_y) {
        return true
    } else return false
}

isPalindrome(-121);


// var isPalindrome = function (x) {
//     if (x < 0) return false

//     let rev = 0
//     for (let i = x; i >= 1; i = Math.floor(i / 10)) rev = rev * 10 + i % 10
//     return rev === x
// };
// ###################################################################
// my favourite


var isPalindrome = function (x) {
    const arr = String(x).split('');

    while (arr.length > 1) {
        if (arr.shift() !== arr.pop()) {
            return false;
        }
    }

    return true;
};


// even better 


var isPalindrome = function (x) {
    return x.toString() === x.toString().split('').reverse().join('');
};
