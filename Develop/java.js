function length() {
    let minpass = 8; 
        maxpass = 128;
        return [maxpass, minpass]
  }
  
  let userInput = length()
  
  var passwordLength = function () {
   if (length() < 8) {
       alert("invalid input");
       return null;
   } 
   if (length() > 128) {
    alert("invalid input");
    return null;
   } 
  generatePassword();
  }