// Define variables to store user input and intermediate calculations
var userInput, step1, step2, step3, step4, finalNumber;

function playMagicTrick() {
    // Step 1: Use a while loop to ensure valid input
    while (true) {
        // Prompt the user for input
        var inputString = prompt("Choose any whole number:");

        // Convert the input to an integer
        userInput = parseInt(inputString);

        // Check if the input is a valid number
        if (!isNaN(userInput)) {
            // Valid input, exit the loop
            break;
        } else {
            // Invalid input, display an error message
            alert("Please enter a valid whole number.");
        }
    }

      // Step 2: Perform calculations
      step1 = userInput + 9;
      step2 = step1 * 2;
      step3 = step2 - 4;
      step4 = step3 / 2;
      finalNumber = step4 - userInput;

      // Step 3: Display the output using document.write with HTML formatting
      document.write('<section class="magic-trick-section">');
      document.write("<h2>The Trick:</h2>");
      document.write("<p>Step 1: I added 9 to " + userInput + ". The new number is " + step1 + ".</p>");
      document.write("<p>Step 2: I multiplied " + step1 + " by 2. The new number is " + step2 + ".</p>");
      document.write("<p>Step 3: I subtracted 4 from " + step2 + ". The new number is " + step3 + ".</p>");
      document.write("<p>Step 4: I divided " + step3 + " by 2. The new number is " + step4 + ".</p>");
      document.write("<p>Step 5: I subtracted your original number of " + userInput + " from " + step4 + ".</p>");
      document.write("<p><strong>Your final number is: " + finalNumber + "!</strong></p>");
      document.write("</section>");

      // Display the final result using an alert
      alert("Your final number is: " + finalNumber + "!");
  }

// Call the playMagicTrick function when the page loads
playMagicTrick();

// Function to reload the page when the "Play Again" button is clicked
function refreshPage() {
    location.reload();
}
