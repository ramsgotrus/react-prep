function isPowerOfTwo(n) {
    if (n < 1) return false
    // Big-o = 0(longn)
    // while (n > 1) {
    //     if (n % 2 !== 0) { return false }
    //     n = n / 2
    // }
    // return true

    // Big -O 0(1)

    return (n & (n - 1)) === 0
}

function checkIsPowerOfTwo(arr) {
    let returnArray = []
    for (let i = 0; i < arr.length; i++) {
        if (isPowerOfTwo(arr[i])) {
            returnArray.push(arr[i])
        }
    }
    return returnArray
}
console.log(checkIsPowerOfTwo([1, 2, 3, 4, 5]))