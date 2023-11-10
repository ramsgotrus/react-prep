function recursiveFibonacci(n) {
    if (n < 2) {
      return n
    }
    return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1)
  }

console.log(recursiveFibonacci(7))