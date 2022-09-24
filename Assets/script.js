// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function to generate password
function generatePassword(){
  var length = passwordLength();
 
  console.log(length);
}

// fucntion to get password length
function passwordLength(){
  var passLength;
  do {
     passLength = parseInt(window.prompt("Please choose password length between 8 and 128"));
  } while (passLength < 8 || passLength > 128);
  return passLength;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
