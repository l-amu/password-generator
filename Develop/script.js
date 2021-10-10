// Assignment code here
let enter;
let psswordLength;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  let RandomNumber = [0,1,2,3,4,5,6,7,8,9,10]
  let RandomLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
  let RandomUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];
  let RandomSymbol  = [",", "~", ",", "`" ,"!", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":" ,",", ";", ",", "'", "<", "=", ">", ".", "?", ",", "/"];
  
function generatePassword() {
      userOptions();     
      // why do we need return in here?   
        return randomizePass();
    
 };

 function randomizePass() {
  let CharacterTypeOne = RandomNumber[Math.floor(Math.random() * RandomNumber.length)];
  let CharacterTypeTwo = RandomLowerCase[Math.floor(Math.random() * RandomLowerCase.length)];
  // how to add this without Math.floor?
  let CharacterTypeThree = RandomUpperCase[Math.floor(Math.random() * RandomUpperCase.length)];
  let CharacterTypeFour = RandomSymbol[Math.floor(Math.random() * RandomSymbol.length)];
  return CharacterTypeOne + CharacterTypeTwo +CharacterTypeThree + CharacterTypeFour;
 }

 function userOptions() {
  var psswordLength = Number(prompt("How many characters would you like your password? Choose between 8 and 128"),10)
  console.log("-----: ", length);
  if (psswordLength < 8) {
      alert("You must choose between 8 and 128");
      return null;
  }
  if (psswordLength > 128) {
   alert("You must choose between 8 and 128");
   return null;
  } 

  var gotNumber = confirm("click ok if you want add number");
  var gotSymbols = confirm("click ok if you want add symbols");
  var gotUpperCase = confirm("click ok if you want add uppercase");
  var gotLowerCase = confirm("click ok if you want add lowercase");
  
  // when user doesn't choose any critrea
  if (gotNumber === false && gotSymbols === false && gotUpperCase === false && gotLowerCase === false) {
    alert("choose at least one criteria")
    return null;
  } 
  // when user chooses every critrea
  else if (gotNumber === true && gotSymbols === true && gotUpperCase === true && gotLowerCase === true) {
    randomizePass(); 
  }
  // choices based on RandomNumber
  else if (gotNumber === true && gotSymbols === false && gotUpperCase === false && gotLowerCase === false) {
    psswordLength = RandomNumber ;
  }
  else if (gotNumber === true && gotSymbols === true && gotUpperCase === false && gotLowerCase === false) {
    psswordLength = RandomNumber + RandomSymbol;
  }
  else if (gotNumber === true && gotSymbols === true && gotUpperCase === false && gotLowerCase === true) {
    psswordLength = RandomNumber + RandomLowerCase + RandomSymbol;
  }
  else if (gotNumber === true && gotSymbols === true && gotUpperCase === true && gotLowerCase === false) {
    psswordLength = RandomNumber + RandomSymbol + RandomUpperCase; 
  }
  // choices based on RandomSymbol
  else if (gotNumber === false && gotSymbols === true && gotUpperCase === false && gotLowerCase === false) {
    psswordLength = RandomSymbol;
  }
  else if (gotNumber === false && gotSymbols === true && gotUpperCase === true && gotLowerCase === false) {
    psswordLength = RandomSymbol + RandomUpperCase;
  }
  else if (gotNumber === false && gotSymbols === true && gotUpperCase === true && gotLowerCase === true) {
    psswordLength = RandomSymbol + RandomLowerCase + RandomUpperCase; 
  }
  else if (gotNumber === false && gotSymbols === true && gotUpperCase === false && gotLowerCase === true) {
    psswordLength = RandomSymbol + RandomLowerCase;
  }
  // choices based on gotUpperCase
  else if (gotNumber === false && gotSymbols === false && gotUpperCase === true && gotLowerCase === false) {
    psswordLength = RandomUpperCase; 
  }
  else if (gotNumber === true && gotSymbols === false && gotUpperCase === true && gotLowerCase === true) {
    psswordLength = RandomNumber + RandomUpperCase + RandomLowerCase; 
  }
  else if (gotNumber === true && gotSymbols === false && gotUpperCase === true && gotLowerCase === false) {
    psswordLength = RandomNumber + RandomUpperCase;
  }
  else if (gotNumber === false && gotSymbols === false && gotUpperCase === true && gotLowerCase === true) {
    psswordLength = RandomLowerCase + RandomUpperCase;
  }
  // choices based on gotLowerCase
  else if (gotNumber === false && gotSymbols === false && gotUpperCase === false && gotLowerCase === true) {
    psswordLength = RandomLowerCase;
  }
  else if (gotNumber === true && gotSymbols === false && gotUpperCase === false && gotLowerCase === true) {
    psswordLength = RandomNumber + RandomLowerCase;
  }
  
  
console.log(gotNumber);
// whatever the user chooses
var password = [];
console.log(password)
for (var i = 0; i < enter; i++) {
  var pickChoices = length[Math.floor(Math.random() * psswordLength.length)];
  password.push(pickChoices);
}
  var userCiteriaInput = {
    psswordLength: psswordLength,
    gotNumber: gotNumber,
    gotSymbols: gotSymbols,
    gotUpperCase: gotUpperCase,
    gotLowerCase: gotLowerCase,
  }
  // array.push("userCiteria");
  

  return userCiteriaInput;





 };


 
  



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
