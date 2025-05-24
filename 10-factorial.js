// Recursive factorial function
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Parse the argument as integer
const num = parseInt(process.argv[2]);

// Check for NaN and compute factorial
const result = isNaN(num) ? 1 : factorial(num);

console.log(result);
