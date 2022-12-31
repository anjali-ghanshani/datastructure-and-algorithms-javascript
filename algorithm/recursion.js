/* 
1. Identify the abse case
2. Identify the recursive case
3. Get closer and closer and return when needed. Usually you have 2 returns one for the base case and one for recursive case
*/



function three() {
    console.log("three")
}

function two() {
    three()
    console.log("two")
}

function one() {
    two()
    console.log("one")
}

// one()


//  Factorial Function

function factorial(n) {
    if (n === 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(5))

