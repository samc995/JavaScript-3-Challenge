// Assignment code here

var generateBtn = document.querySelector("#generate");

function generatePassword() {
var passwordText = []


  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "()", "`", "-", "=", "+"]

  var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  function getRandChar(array) {
    return array[Math.floor(Math.random() * array.length)];

  }
  console.log("Lower case letter", getRandChar(lowerLetter));
  console.log("Upper case letter", getRandChar(upperLetter));
  console.log("Symbol", getRandChar(specialCharacters));
  console.log("Number", getRandChar(number));



  var passwordLength = Number(prompt("Between 8 and 128, how many characters would you like your password to be?"))
  var useLower = confirm("Include lowercase letters?");
  var useUpper = confirm("Include uppercase letters?");
  var useSpecial = confirm("Include special characters?");
  var useNumber = confirm("Include numbers?");

  while (passwordLength <= 8 || passwordLength >= 128 || isNaN(passwordLength)) {
    Number(prompt("Password must be between 8 and 128 characters!"))
  }
while (passwordText.length <= passwordLength) {
  if (useLower) {
    passwordText += getRandChar(lowerLetter)
  }

  if (useUpper) {
    passwordText += getRandChar(upperLetter);
  }


  if (useSpecial) {
    passwordText += getRandChar(specialCharacters);
  }

  if (useNumber) {
    passwordText += getRandChar(number);

  }
}
return passwordText;

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//create variables that we can use 



















generateBtn.addEventListener("click", writePassword);


// Add event listener to generate button

// .isnan alert mustcontainanumber

// if length is less than 8 alert "passwordmustbeatleas8characters" return null

// Same for if over 128 characters

// use confirms to prompt number of characters, generic conferm for ok or cancel 

// concat when you have an array you can add to that array
