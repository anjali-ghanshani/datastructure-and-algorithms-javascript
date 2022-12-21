/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */
/* 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters. */



var ValiParen = function (str) {
    var pair = new Map()

    // pair = str.split('');
    pair.set('(', ')');
    pair.set('[', ']');
    pair.set('{', '}');
    console.log(pair.entries());
    if (pair.length === 0) return undefined
    pair.set('(', ')');
    console.log(pair);

}

ValiParen("()");
ValiParen("()[]{}");
ValiParen("({");