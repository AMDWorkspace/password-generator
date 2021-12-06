// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar ="abcdefghijklmnopqrstuvwxyz";
var uppercaseChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar ="0123456789";
var specialChar ="!#$%&'()*+-./;:<=>?@[]\^_`{}|~";

function generatePassword() {
  console.log("Hey, You clicked the button!")

  var password = "";
  var passwordChar = "";

// Step 1. Prompt the user for the password criteria.
//  a. Password length 8 < 128

  var passwordLengthUser = 0
 

while (passwordLengthUser < 8 || passwordLengthUser > 128) {
  passwordLengthUser = parseInt(prompt("How many characters would you like your password to contain? Password must be between 8-128 characters."));
  if (passwordLengthUser < 8) {
    alert("Password must have more than 7 characters!");
  }
  if (passwordLengthUser > 128) {
    alert("Password must not have more than 128 characters!")
  }
}
var lowercaseCharactersChoice = false;
var uppercaseCharactersChoice = false;
var numericalCharactersChoice = false;
var specialCharactersChoice = false;

//  b. Lowercase, Uppercase, Numbers, Special Characters
while((lowercaseCharactersChoice || uppercaseCharactersChoice || numericalCharactersChoice || specialCharactersChoice) == false) {
  lowercaseCharactersChoice = confirm("Would you like your password to contain lowercase characters?");
  uppercaseCharactersChoice = confirm("Would you like your password to contain numerical characters?");
  numericalCharactersChoice = confirm("Would you like your password to contain uppercase characters?");
  specialCharactersChoice = confirm("Would you like your password to contain special characters?");
  if ((lowercaseCharactersChoice || uppercaseCharactersChoice || numericalCharactersChoice || specialCharactersChoice) == false) {
    alert("You must select one of the character choices!");
  }
}
// Step 2. Validate the input.
var charset = "";

  if (lowercaseCharactersChoice) {
    charset += lowercaseChar;
  }
  if (uppercaseCharactersChoice) {
    charset += uppercaseChar;
  }
  if (numericalCharactersChoice) {
    charset += numericalChar;
  }
  if (specialCharactersChoice) {
    charset += specialChar;
  }
var charsetLength = charset.length;
var counter = 0;
var password = "";

// Step 3. Generate password based on criteria.
while(counter < passwordLengthUser) {
  var randomNum = Math.floor(Math.random() * charsetLength);
  password += charset.charAt(randomNum);
  counter += 1
}
alert("The random password generated is: " + password)

// Step 4. Display the generated password to the page.
return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
