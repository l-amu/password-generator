// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


  let RandomNumber = [1,2,3,4,5,6,7,8,9,10]
  let RandomLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
  let RandomUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];
  let RandomSymbol  = [",", "~", ",", "`" ,"!", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":" ,",", ";", ",", "'", "<", "=", ">", ".", "?", ",", "/", ];

function generatePassword (){
 

  let passwordCriteriaOne = RandomNumber[Math.floor(Math.random() * RandomNumber.length)];
  let passwordCriteriaTwo = RandomLowerCase[Math.floor(Math.random() * RandomLowerCase.length)];
  // how to add this without Math.floor?
  let passwordCriteriaThree = RandomUpperCase[Math.floor(Math.random() * RandomUpperCase.length)];
  let passwordCriteriaFour = RandomSymbol[Math.floor(Math.random() * RandomSymbol.length)];

return passwordCriteriaOne + passwordCriteriaTwo + passwordCriteriaThree + passwordCriteriaFour;

}

  
//Note to TA's: I got this code from stackoverflow

generateBtn.onclick = function(){
  var response=confirm("Enter Psssword Criteria?");
  if (response==true) {  
    prompt("For your passweord Criterea enter ")
  }
else {
  alert("please enter valid input")
}
}

  



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generatePassword();
