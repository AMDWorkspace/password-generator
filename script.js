// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar ="abcdefghijklmnopqrstuvwxyz";
var uppercaseChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar ="0123456789";
var specialChar ="!#$%&'()*+-./;:<=>?@[]\^_`{}|~"

function generatePassword() {
  console.log("Hey, You clicked the button!")

  var password = "";
  var passwordChar = "";

// Step 1. Prompt the user for the password criteria.
//  a. Password length 8 < 128

  var passwordLengthUser = prompt("Password must be between 8-128 characters.");
  passwordLengthUser = parseInt(passwordLengthUser);

  if (passwordLengthUser < 8) {
    alert("Password must have more than 7 characters!");
    return "";
  }

  if (passwordLengthUser > 128) {
    alert("Password must not have more than 128 characters!");
  }

//  b. Lowercase, Uppercase, Numbers, Special Characters

  var lowercaseCharactersChoice = confirm("Would you like your password to contain lowercase characters?");

  if (lowercaseCharactersChoice) {
    passwordChar += lowercaseChar;
  }

  var uppercaseCharactersChoice = confirm("Would you like your password to contain uppercase characters?");

  if (uppercaseCharactersChoice) {
    passwordChar += uppercaseChar;
  }

  var numericalCharactersChoice = confirm("Would you like your password to contain numerical characters?");

  if (numericalCharactersChoice) {
    passwordChar += numericalChar;
  }

  var specialCharactersChoice = confirm("Would you like your password to contain special characters?");

  if (specialCharactersChoice) {
    passwordChar += specialChar;
  }
  

// Step 2. Validate the input.

// Step 3. Generate password based on criteria.



// Step 4. Display the generated password to the page.
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
