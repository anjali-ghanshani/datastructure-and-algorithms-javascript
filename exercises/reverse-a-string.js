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

reverse("How are you doing today?")