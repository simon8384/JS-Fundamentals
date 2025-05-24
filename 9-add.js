// Function that adds two numbers
function add(a, b) {
  return a + b;
}

// Parse arguments as integers
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

// Print the result of add, will print NaN if a or b is not a number
console.log(add(a, b));
