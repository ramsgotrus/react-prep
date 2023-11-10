
/* Given two positive integers left and right, find the two integers num1 and num2 such that:

left <= nums1 < nums2 <= right .
nums1 and nums2 are both prime numbers.
nums2 - nums1 is the minimum amongst all other pairs satisfying the above conditions.
Return the positive integer array ans = [nums1, nums2]. If there are multiple pairs satisfying these conditions, return the one with the minimum nums1 value or [-1, -1] if such numbers do not exist.

A number greater than 1 is called prime if it is only divisible by 1 and itself.

 

Example 1:

Input: left = 10, right = 19
Output: [11,13]
Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
Since 11 is smaller than 17, we return the first pair */

function isPrime(n){
    if(n <=2) return n
    let max = Math.floor(Math.sqrt(n))
    for(let i =2; i <=max; i ++){
        if(n % i === 0) return false
    }
    return true
}
var closestPrimes = function(left, right) {
    let primeArr = [];
    let res = [-1, -1];
    let minDiff = Infinity;

    for(let i=left; i<=right; i++){
        if(isPrime(i)) primeArr.push(i)
    }

    for(let i=1; i<primeArr.length; i++){
        let diff = primeArr[i]-primeArr[i-1];
        if(diff<minDiff){
            res = [primeArr[i-1], primeArr[i]]
            minDiff = diff;
        }
    }
    return res

};