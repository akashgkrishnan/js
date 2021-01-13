const fib = (n, memo = {1: 1, 2: 1}) => {
  if (n in memo) return memo[n];
  
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(10));
