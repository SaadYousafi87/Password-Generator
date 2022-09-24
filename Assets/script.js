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
  var upperLower = getUpperLower();

  console.log(length);
  console.log(upperLower);
}

// fucntion to get password length
function passwordLength(){
  var passLength;
  do {
     passLength = parseInt(window.prompt("Please choose password length between 8 and 128"));
  } while (passLength < 8 || passLength > 128);
  return passLength;
}

// function to get uppercase or lowercase character
function getUpperLower(){
  var caseLetter; 
  do{
    var bool = false;
    caseLetter = window.prompt("Please enter the uppercase or lowercase character");
    if(!isNaN(caseLetter)){
      bool = true;
    }
  } while (bool);
  return caseLetter;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
