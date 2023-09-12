// Assignment Code
var generateBtn = document.querySelector("#generate");
// var characterLength = ();
var choiceArr = [];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;

}


function getUserPasswordOptions() {

  var passwordLength = prompt("How many characters would you like your password?")
  console.log(passwordLength)
  var hasSpecialCharacters = confirm("Would you like Special Characters in your password?")
  var hasUpperCaseLetters = confirm("Would you like Upper Case Letters in your password?")
  var hasLowerCaseLetters = confirm("would you like Lower Case Letters in your password?")
  var hasNumbers = confirm("Would you like Numbers in your password?")
  var pwdOptions = {
    specialChars: hasSpecialCharacters,
    upperCaseChars: hasUpperCaseLetters,
    lowerCaseChars: hasLowerCaseLetters,
    numberChars: hasNumbers,
    length: passwordLength

  }
  return pwdOptions
}

function generatePassword() {
  var optionsObj = getUserPasswordOptions()
  console.log(optionsObj.specialChars)
  var passwordResult = []
  var possibleChars = []
  var guaranteedChars = []

  if (optionsObj.specialChars) {

    possibleChars = possibleChars.concat(specialCharacters)
    guaranteedChars.push(getRandom(specialCharacters))

  }

  if (optionsObj.upperCaseChars) {

    possibleChars = possibleChars.concat(upperCasedCharacters)
    guaranteedChars.push(getRandom(upperCasedCharacters))

  }

  if (optionsObj.lowerCaseChars) {

    possibleChars = possibleChars.concat(lowerCasedCharacters)
    guaranteedChars.push(getRandom(lowerCasedCharacters))
  }

  if (optionsObj.numberChars) {

    possibleChars = possibleChars.concat(numericCharacters)
  }




 
  for (var i = 0; i < optionsObj.length; i++) {
    var char = getRandom(possibleChars)
    passwordResult.push(char)
  }

  for (var i = 0; i < guaranteedChars.length; i++) {
    passwordResult[i] = guaranteedChars[i]
  }
  return passwordResult.join('')


}
// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

