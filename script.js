var characterLength = ();
var choiceArr = [];


var specialCharArr = [];
var lowerCaseArr = [];
var upperCaseArr = [];
var numberArr = [];






// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompts() {
  choiceArr =[];
  
  characterLength = parseInt(prompt("How many characters would you like your password to be?"));
}

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alrert("Character length has to be a number between 8-128 characters.  Please Try Again!");
    return false;
  }

  if (confirm("would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm("would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm("would you like Special Characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm("would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);

}


