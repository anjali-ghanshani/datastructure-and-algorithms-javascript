/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 */


var longestCommonPrefix = function (strs) {
    var str = strs.sort();
    var last = str[str.length - 1], first = str[0], i = 0;
    var result = '';
    for (i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            result += first[i];
        }
    }
    return console.log(result);
};

longestCommonPrefix(['flower', 'flower', 'floweright']);