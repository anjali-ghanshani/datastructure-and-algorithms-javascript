//  always convert string into array using split() and then solve the question.\

function reverse(str) {
    const ar = str.split("")
    // let temp = ar[0]
    const ra = []
    var end = ar.length - 1
    for (let i = 0; i <= ar.length - 1; i++) {
        ra[i] = ar[end]
        end--
    }
    console.log(ra.join(""))

}

// reverse("How are you doing today?")


// more efficient way  of doing this

function reverse2(str) {
    return str.split("").reverse().join('');
}

// using arrow function
const reverse3 = srt => str.split("").reverse().join("")

//  using spread operator - we no longer need split() here
const reverse4 = str => [...str].reverse().join("");

console.log(reverse4("How are you doing today?"));