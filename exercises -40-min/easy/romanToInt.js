//  Attempted Solution:

// var romToInt = function (roman) {
//     var romanArray = roman.split("")
//     var number = 0
//     console.log(roman, romanArray);
//     for (let i = 0; i <= romanArray.length - 1; i++) {
//         switch (romanArray[i]) {
//             case 'I':
//                 number += 1;
//                 break;
//             case 'V':
//                 number += 5;
//                 break;
//             case 'X':
//                 number += 10;
//                 break;
//             case 'L':
//                 number += 50;
//                 break;
//             case 'C':
//                 number += 100;
//                 break;
//             case 'D':
//                 number += 500;
//                 break;
//             case 'M':
//                 number += 1000;
//                 break;
//             default:
//                 console.log("invalid roman entry")
//         }

//     }
//     return number;
// }


// very good solution:

var romanToInt = function (roman) {
    var ref = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let num = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        num += ref[roman[i]]
        if (ref[roman[i]] > ref[roman[i - 1]]) {
            num -= ref[roman[i - 1]]
            i--
        }
    }
    return num
}

// There is a case left to test where input = 'VV' || 'LL' || 'CC'