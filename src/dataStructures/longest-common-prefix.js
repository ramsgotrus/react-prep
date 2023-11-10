/* 4. Longest Common Prefix
Easy
16.3K
4.3K
Companies
Write a function to find the longest common prefix string amongst an array of strings.

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

If there is no common prefix, return an empty string "". */

let strs = ["flower","flow","flight"]
function commonPrefix(strs){
    let pref = strs[0]
    let i =0
    while(i<strs.length){
        if(!strs[i].startsWith(pref)){
            pref = pref.slice(0,-1)
        }
        else i++
    }
    return pref
}

console.log(commonPrefix(strs))