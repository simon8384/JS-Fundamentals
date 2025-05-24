// Get the argument and convert to integer
const x = parseInt(process.argv[2]);

// Check if x is a valid number
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
