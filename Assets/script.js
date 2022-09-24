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
  var specialCharacter = getSpecialCharacter();
  var randomNum = getRandomNum(length);

  console.log(length);
  console.log(upperLower);
  console.log(specialCharacter);
  console.log(randomNum);
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

// function to get special character
function getSpecialCharacter(){
  var specialChar;
  var characterArray = ["!", "#", "$", "%", "&", "'", "*", "-", "?", "@", "_"];
  do{
    var bool = true;
    specialChar = window.prompt("Please choose cpecial character from {!, #, $, %, &, ', *, -, ?, @, _ }");
    for (var i = 0; i < characterArray.length; i++){
      if(specialChar == characterArray[i]){
        bool = false;
      }
    }
  } while (bool);
  return specialChar;
}

// function to generate random number
function getRandomNum(max){
  var randNum = [max];
  for (var i = 0; i < max; i++){
    randNum[i] = Math.floor(Math.random() * max);
  }
  return randNum;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
