var shortestDistance = function (words, target, startIndex) {
    var index = startIndex;
    var jindex = words.length - 1;
    // var jindex = startIndex;
    var counter1 = 0;
    var counter2 = 0;

    while (index <= words.length - 1) {
        if (words[index] === target) {
            counter1++;
            break;
        }
        index++;
    }

    while (jindex >= 0) {
        if (words[jindex] === target) {
            counter2++;
            break;
        }
        jindex--;
    }
    if (index === words.length) return -1;

    // if (jindex >= index) return words.length - index
    // else if (jindex < index) return words.length - jindex
    if (jindex >= index) return counter1;
    else if (jindex < index) return counter2;
};

console.log(
    shortestDistance(
        ["hello", "i", "am", "leetcode", "hello"],
        (target = "hello"),
        (startIndex = 1)
    )
);
console.log(
    shortestDistance(
        (words = ["a", "b", "leetcode"]),
        (target = "leetcode"),
        (startIndex = 0)
    )
);
console.log(
    shortestDistance(
        (words = ["i", "eat", "leetcode"]),
        (target = "ate"),
        (startIndex = 0)
    )
);
console.log(
    shortestDistance(
        [
            "vieruszfqo",
            "ivgfhbopfy",
            "vfsymkzuio",
            "ryqtkehkov",
            "vfsymkzuio",
            "vieruszfqo",
            "xnsacsqaad",
            "xnsacsqaad",
            "ryqtkehkov",
            "oxnuqvvyqx",
        ],

        "ryqtkehkov",
        4
    )
);

console.log(
    shortestDistance(
        [
            "ibkgecmeyx",
            "jsdkekkjsb",
            "gdjgdtjtrs",
            "jsdkekkjsb",
            "jsdkekkjsb",
            "jsdkekkjsb",
            "gdjgdtjtrs",
            "msjlfpawbx",
            "pbgjhutcwb",
            "gdjgdtjtrs",
        ],
        "pbgjhutcwb",
        0
    )
);

console.log(shortestDistance(["a", "b", "leetcode"], "leetcode", 0));
