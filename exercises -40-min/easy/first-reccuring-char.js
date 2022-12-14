var firstRecChar = function (input) {
    var charSet = new Set()
    for (let i = 0; i <= input.length; i++) {
        if (charSet.size === input.length)
            return undefined
        else if (!charSet.has(input[i]))
            charSet.add(input[i])
        else return input[i]

    }
    // return input[i]
}

console.log(firstRecChar([2, 3, 4, 5]))
console.log(firstRecChar([2, 5, 1, 5, 2, 3, 5, 5, 1, 2, 4,]))
console.log(firstRecChar([2]))

