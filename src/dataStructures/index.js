
/* ip add 192.168.0.230
The methods do work correctly. -1062731546 as well as 3232235750 are a correct integer representation of the IP address 192.168.0.230. In binary, they're the exact same, but depending on whether you look at the value as signed integer (then the first bit means "negative value" and the remaining 31 bits mean 1062731546) or unsigned (then the 32 bits mean 3232235750).

>>> 0 in the ip2int function ensures a conversion to unsigned int. Removing it turns the result into the negative value you were looking for: */
let ip = '192.168.0.230'
// 3232235750
'192.168.0.230'.split('.').reduce(function (ipInt, octet) { return (ipInt << 8) + parseInt(octet, 10) }, 0) >>> 0;
ip.split`.`.reduce((int, value) => int * 256 + +value)

// -1062731546
'192.168.0.230'.split('.').reduce(function (ipInt, octet) { return (ipInt << 8) + parseInt(octet, 10) }, 0);

function iptoInt(ip) {
    return ip.split('.').reduce((ipiInt, octet) => { return (ipiInt << 8) + parseInt(octet, 10) }, 0) >>> 0
}

//console.log(iptoInt(ip))

//repeat substring pattern 
let s = "abab"
//Output: true

function checkRepeatSubstring(s) {
    return s.repeat(2).slice(1, -1).includes(s)
}
//console.log(checkRepeatSubstring(s))

//search inserction position

let nums = [1, 3, 4, 5]

var searchInsert = function (nums, target) {
    if (nums.includes(target)) return nums.indexOf(target)
    else {
        return [...nums, target].sort((a, b) => a - b).indexOf(target)
    }
};

//Elements greater than the previous and next element in an Array

const numsArr = [2, 3, 1, 5, 4, 9, 8, 7, 5]

function greaterNumber(arr) {
    let result = []
    for (let i = 0, j = 1; i < arr.length; i++) {
        if (arr[j] > arr[i]) {
            result.push(arr[j])
        }
        j++
    }
    return result
}

console.log(greaterNumber(numsArr))