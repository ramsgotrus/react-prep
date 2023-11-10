

/*Given an array of strings words and an integer k, return the k most frequent strings.
https://replit.com/@Codevolution/JavaScript-Algorithms#math/prime.js

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

 

Example 1:

Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:

Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively */

let words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"]
let k = 4
function mostCommonWord(words, k) {
    let hasMap = new Map()
    for (let i = 0; i < words.length; i++) {
        const checkKey = hasMap.get(words[i])
        hasMap.set(words[i], checkKey === undefined ? 1 : checkKey + 1)
    }
    const arr = [...hasMap.entries()].sort((a, b) => b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0]))
    return arr.slice(0, k).map(item => item[0])
}
console.log(mostCommonWord(words, k))
