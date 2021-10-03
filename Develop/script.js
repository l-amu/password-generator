// // Assignment code here


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

 const generatePassword = {
  getRandomLower: String.fromCharCode(Math.floor(Math.random() * + 26) + 97);
  getRandomUpper: String.fromCharCode(Math.floor(Math.random() * + 26) + 65);
  getRandomNumber: String.fromCharCode(Math.floor(Math.random() * + 10) + 48);
}
// console.log(generatePassword());
function generatePassword() {
  return String.fromCharCode (Math.random() * + 26 + 97);
}
console.log(generatePassword());
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);