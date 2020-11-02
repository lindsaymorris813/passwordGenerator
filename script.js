// Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleChar = [];
var arrayUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arraySpecialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", '"', "'",
 "{", "}", "?", "<", ">", ":", ";", ".", "/", "+", "-", "_", "="];
 var password = [];
 var whichCharSet = [];
 var whichChar=[];
 var result="";

 generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
   var passwordLength= prompt("How many characters (8-128)?");
    while (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("How many characters? \n*Reminder: Please choose between 8 and 128*");
    };
    var userWantsUpper = confirm("Would you like your password to contain upper case letters?");
    if (userWantsUpper) {
        possibleChar.push(arrayUpperCase);
        var randomUpperCase = arrayUpperCase[Math.floor(Math.random() * arrayUpperCase.length)];
        password.push(randomUpperCase);
        passwordLength--;
    };

    var userWantsLower = confirm("Would you like your password to contain lower case letters?");
    if (userWantsLower) {
        possibleChar.push(arrayLowerCase);
        var randomLowerCase = arrayLowerCase[Math.floor(Math.random() * arrayLowerCase.length)];
        password.push(randomLowerCase);
        passwordLength--;
    };
    
    var userWantsNumbers = confirm("Would you like your password to contain numbers?");
    if (userWantsNumbers) {
        possibleChar.push(arrayNumbers);
        var randomNumber = arrayNumbers[Math.floor(Math.random() * arrayNumbers.length)];
        password.push(randomNumber);
        passwordLength--;
    };

    var userWantsSpecial = confirm("Would you like your password to contain special characters?");
    if (userWantsSpecial) {
        possibleChar.push(arraySpecialChars);
        var randomSpecial = arraySpecialChars[Math.floor(Math.random() *arraySpecialChars.length)];
        password.push(randomSpecial);
        passwordLength--;
    };
    console.log(possibleChar);

    for (var i = 0; i < passwordLength; i++) {
        var whichCharSet = possibleChar[Math.floor(Math.random () * possibleChar.length)];
        var whichChar = whichCharSet[Math.floor(Math.random() * whichCharSet.length)];
        password.push(whichChar);
    }
    console.log(password.join(""));
    var result = password.join("");
    alert(result);

}