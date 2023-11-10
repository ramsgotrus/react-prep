function isPrime(n) {
    if (n < 2) return n
    let max = Math.floor(Math.sqrt(n))
    for (let i = 2; i <= max; i++) {
        if (n % i === 0) return false
    }
    return true
}

console.log(isPrime(3))