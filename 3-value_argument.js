// Get command-line arguments starting from the third element
const args = process.argv.slice(2);

// Check if the first argument exists
if (args[0] === undefined) {
  console.log("No argument");
} else {
  console.log(args[0]);
}
