// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  let RandomNumber = [0,1,2,3,4,5,6,7,8,9,10]
  let RandomLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
  let RandomUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];
  let RandomSymbol  = [",", "~", ",", "`" ,"!", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":" ,",", ";", ",", "'", "<", "=", ">", ".", "?", ",", "/"];
  var choices;
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
  var length = Number(prompt("How many characters would you like your password? Choose between 8 and 128"),10)
  console.log("-----: ", length);
  if (length < 8) {
      alert("invalid input");
      return null;
  } 
  if (length > 128) {
   alert("invalid input");
   return null;
  } 

  var gotNumber = confirm("click ok if you want add number");
  var gotSymbols = confirm("click ok if you want add symbols");
  var gotUpperCase = confirm("click ok if you want add uppercase");
  var gotLowerCase = confirm("click ok if you want add lowercase");
  
  // response where user doesn't choose any critrea
  if (gotNumber === false && gotSymbols === false && gotUpperCase === false && gotLowerCase === false) {
    alert("choose at least one criteria")
  } 
  // reposne when user chooses every critrea
  else if (gotNumber === true && gotSymbols === true && gotUpperCase === true && gotLowerCase === true) {
    randomizePass(); 
  }
  else if (gotNumber === true) {
    choices = RandomNumber;
  }

  var userCiteria = {
    length: length,
    gotNumber: gotNumber,
    gotSymbols: gotSymbols,
    gotUpperCase: gotUpperCase,
    gotLowerCase: gotLowerCase,
  }
  // array.push("userCiteria");

  return userCiteria;





 };


 
  



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
