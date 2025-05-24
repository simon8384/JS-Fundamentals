// Get the first argument from the command line
const arg = process.argv[2];

// Convert to integer using parseInt
const num = parseInt(arg);

// Check if it's a valid number
if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
