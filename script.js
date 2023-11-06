var generateBtn = document.querySelector("#generate");
var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var lowercase =("abcdefghijklmnopqrstuvwxyz");
var numbers = ("0123456789");
var symbols = ("!@#$%&*=+/-(){}[]:;><?");
  
function generatePassword(length,criteria) {
  var allCharacters = '';
    if (criteria.includes("uppercase")) {
      allCharacters += uppercase;
      }
    if (criteria.includes("lowercase")) {
        allCharacters += lowercase;
      } 
    if (criteria.includes("symbols")) {
        allCharacters += symbols;
      }
    if (criteria.includes("numbers")) {
        allCharacters += numbers;
      }
    if (allCharacters === '') {
        window.alert("Please include at least one criteria")
      }
    console.log(allCharacters);
    var password = "";
      for (var i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(index);
    }
    return password;
}
function writePassword() {
  var length = Number(prompt("Enter length of password (8-128 characters"));
  if ((length < 8) || (length > 128)) {     
    window.alert("invalid input, please enter a numerical value between 8 and 128")
    return;
  } 
  
  var criteria = prompt("What should be included in your password? Type uppercase, lowercase, numbers, and/or sybmols separated by a comma.");
  criteria = criteria.toLowerCase().split(', ');
  var password = generatePassword(length, criteria);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}  
generateBtn.addEventListener("click", writePassword);


