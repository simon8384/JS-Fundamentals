// Get the command-line arguments, excluding the first two (node and script path)
const args = process.argv.slice(2);

// Check the number of arguments
if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
