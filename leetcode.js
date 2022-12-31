// // split

// // create set

// //  compare set

// var similarPairs = function (words) {

//     var count = 0

//     for (i = 0; i <= words.length - 1; i++) {
//         for (j = i + 1; j <= words.length - 1; j++) {

//             let set1 = new Set(words[i].split(''))
//             let set2 = new Set(words[j].split(''))
//             let areSetsEqual = set1.size === set2.size && [...set1].every(value => set2.has(value))
//             if (areSetsEqual) {
//                 count++
//             }

//         }
//     }
//     return count;
// }


// console.log(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"]))
// similarPairs(["aabb", "ab", "ba"])
// similarPairs(["nba", "cba", "dba"])
// // similarPairs(["nba","cba","dba"])




// function primeFactors(n) {
//     const factors = [];
//     let divisor = 2;
//     let sum = 0
//     while (n >= 2) {
//         if (n % divisor == 0) {
//             factors.push(divisor);
//             n = n / divisor;
//         }
//         else {
//             divisor++;
//         }
//     }

//     for (const v of factors) {
//         sum += v;
//     }



//     if (factors.length === 1) return sum
//     else return primeFactors(sum);

// }

// console.log(primeFactors(10 ^ 5));
// primeFactors(8);
// primeFactors(6);
// primeFactors(5);


// const randomNumber = Math.floor(Math.random() * 10000);
// console.log('Prime factors of', randomNumber + ':', primeFactors(randomNumber))


