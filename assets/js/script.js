// Assignment code here
var charsHigh = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsMedium = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
var charsLow = "0123456789abcdefghijklmnopqrstuvwxyz";

var passwordLengthLow = 7;
var passwordLengthMedium = 11;
var passwordLengthHigh = 23;
var password = "";



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function passwordHigh() {
    var password = "";

    for (var i = 0; i <= passwordLengthHigh; i++) {
        var randomNumber = Math.floor(Math.random() * charsHigh.length);
        password += charsHigh.substring(randomNumber, randomNumber + 1);
    }
    console.log(password);
    return password;
};

function passwordMedium() {
    var password = "";

    for (var i = 0; i <= passwordLengthMedium; i++) {
        var randomNumber = Math.floor(Math.random() * charsHigh.length);
        password += charsMedium.substring(randomNumber, randomNumber + 1);
    }
    console.log(password);
    return password;
};

function passwordLow() {
    var password = "";

    for (var i = 0; i <= passwordLengthLow; i++) {
        var randomNumber = Math.floor(Math.random() * charsLow.length);
        password += charsHigh.substring(randomNumber, randomNumber + 1);
    }
    console.log(password);
    return password;
};


// Write password to the #password input
function writePassword() {
    var passwordPrompt = window.prompt('Type your desired security level, "High", "Medium", "Low"');
    var password = 'None';
    var alertMessage = 'Please choose a valid option';

    if (passwordPrompt === 'High') {
        alertMessage = 'You have chosen High. Your password will use 24 characters, including Upper Case, Lower Case, as well as special characters';
        password = passwordHigh();
    } else if (passwordPrompt === 'Medium') {
        // alertMessage = 'Medium alert message'
        alertMessage = 'You have chosen Medium';
        password = passwordMedium();
    } else if (passwordPrompt === 'Low') {
        // alertMessage = 'Low alert message'
        alertMessage = 'You have chosen Low';
        password = passwordLow();
    }


    window.alert(alertMessage);
    document.getElementById("password").value = password;
}




generateBtn.addEventListener("click", writePassword);