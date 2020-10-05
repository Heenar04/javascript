// Set variable values with array of the requirenments .
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialCharatcters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "?", ":", ";", "<", ">", "=", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// setting a fuction to keep the loop of one fuction in the performance 
function generatePassword() {
  var length = parseInt(prompt("How many characters would you like? (Between 8-128)"));
  if (length < 8 || length > 128) {
      alert("Your password must have length between 8 and 128.TRY AGAIN!");
      return;
  }
  var includeUppercase = confirm("Click OK if you have atleast one uppercase.");
  var includeLowercase = confirm("Click OK if you have atleast one lowercase ");
  var includeSpecialchar = confirm("Click OK if you have atleast one special case .");
  var includeNumber = confirm("Click OK if you have atleast one numbers .");
  var requiredPassword = []
  console.log(requiredPassword)
  if (includeUppercase === false && includeLowercase === false && includeSpecialchar === false && includeNumber === false) {
      alert("Must choose at least one character type");
      return;
  }
  if (includeUppercase) {
      requiredPassword = requiredPassword.concat(uppercase);
      console.log(requiredPassword);
  }
  if (includeLowercase) {
      requiredPassword = requiredPassword.concat(lowercase);
      console.log(requiredPassword);
  }
  if (includeNumber) {
      requiredPassword = requiredPassword.concat(numbers);
      console.log(requiredPassword);
  }
  if (includeSpecialchar) {
      requiredPassword = requiredPassword.concat(specialCharatcters);
      console.log(specialCharatcters)
  }
  var tempPassword = " ";
  var charactersLength = requiredPassword.length;
  for (var i = 0; i < length; i++) {
      tempPassword += requiredPassword[Math.floor(Math.random() * charactersLength)];
      console.log(tempPassword);
  }
  return tempPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


