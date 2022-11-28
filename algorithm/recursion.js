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