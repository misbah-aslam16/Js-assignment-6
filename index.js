//--------------------QUESTION 01--------------------//
var firstName = prompt("Enter your first name......");
var lastName = prompt("Enter your last name......");
var fullName = firstName + " " + lastName;

alert("Hi!" + " " + fullName + ".");

//--------------------QUESTION 02--------------------//
var input = prompt("Enter your favorite mobile model..");
var inputLength = input.length;
document.write("My favorite phone is: " + input + "<br>");
document.write("Length of string: " + inputLength + "<br><br>");

//--------------------QUESTION 03--------------------//
var city = "Pakistani";
document.write("String: " + city + "<br>")
document.write("Index of 'n' : " + city.indexOf("n") + "<br><br>");

//--------------------QUESTION 04--------------------//
var word = "Hello World";
document.write("String: " + word + "<br>");
document.write("Last Index of 'l' : " + word.lastIndexOf("l") + "<br><br>");

//--------------------QUESTION 05--------------------//
var word = "Pakistani";
document.write("String: " + word + "<br>");
document.write("Character at index 3: " + word.charAt(3) + "<br><br>");

//--------------------QUESTION 06--------------------//
var firstName = prompt("Enter your first name......");
var lastName = prompt("Enter your last name......");
var fullName = firstName + " " + lastName;

alert("Hi!" + " " + fullName + ".");

//--------------------QUESTION 10--------------------//

var userInput = prompt("Enter any word or sentence....");
document.write("User Input: " + userInput + "<br>");
document.write("Upper case: " + userInput.toUpperCase() + "<br><br>"); 

//--------------------QUESTION 11--------------------//
 var names=prompt("Enter any word:")
var titleCase=names.charAt(0).toUpperCase()+names.slice(1).toLowerCase()
document.write("User Input: "+names+"<br> Title Case: "+titleCase+"<br>")

//--------------------QUESTION 12--------------------//

var num = 35.36;
var nums = num.toString().replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + nums + "<br><br>");

//--------------------QUESTION 07--------------------//


    var city = "Hyderabad";
    var newCity = city.replace("Hyder", "Islam");
    document.write("The new city name is: " + newCity + "<br><br>");

//--------------------QUESTION 08--------------------//

    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var newMessage = message.replace(/and/g, "&");
    document.write("The updated message is: " + newMessage + "<br><br>");


//--------------------QUESTION 09--------------------//

var str = "472";
var num = Number(str);

document.write("Value: " + str + " <br>Type: " + typeof str + "<br>");
document.write("Value: " + num + " <br>Type: " + typeof num + "<br><br>");

//--------------------QUESTION 13--------------------//

function validateUsername(username) {
    // ASCII codes for [@, ., ,, !]
    var specialSymbols = [33, 44, 46, 64];

    for (var i = 0; i < username.length; i++) {
        if (specialSymbols.includes(username.charCodeAt(i))) {
            return false;
        }
    }
    return true;
}

var username = prompt("Enter your username:");

while (!validateUsername(username)) {
    alert("Username contains special symbol. Please enter a valid username.");
    username = prompt("Enter your username:");
}

document.write("Valid username: " + username);

//--------------------QUESTION 14--------------------//

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");

    function searchArray(item, array) {
        item = item.toLowerCase();
        for (var i = 0; i < array.length; i++) {
            if (array[i].toLowerCase() === item) {
                return true;
            }
        }
        return false;
    }
 
    if (searchArray(userInput, A)) {
        alert(userInput + " is available in the list.");
    } else {
        alert(userInput + " is not available in the list.");
    }
//--------------------QUESTION 15--------------------//

function validatePassword(password) {
    var alphabet = /[a-zA-Z]/.test(password);
    var number = /\d/.test(password);
    var startsWithAlphabet = /^[a-zA-Z]/.test(password);
    var isValidLength = password.length >= 6;

    return alphabet && number && startsWithAlphabet && isValidLength;
}

var password = prompt("Enter your password:");

while (!validatePassword(password)) {
    alert("Password must contain alphabets and numbers, must not start with a number, and must be at least 6 characters long.");
    password = prompt("Enter your password:");
}

document.write("Valid password entered.");
//--------------------QUESTION 16--------------------//

var university = "University of Karachi";
var array = university.split("");

document.write("Array elements:<br>");
for (var i = 0; i < array.length; i++) {
    document.write(array[i] + "<br>");
}
//--------------------QUESTION 17--------------------//
 var userInput = prompt("Enter a string:");
 function displayLastCharacter() {
   
    if (userInput) {
        var lastCharacter = userInput[userInput.length - 1];
        alert("The last character of the input is: " + lastCharacter);
    } else {
        alert("No input provided.");
    }
}
displayLastCharacter();

//--------------------QUESTION 18--------------------//
var sentence = "The quick brown fox jumps over the lazy dog";
var wordToCount = "the";

var lowerSentence = sentence.toLowerCase();
var lowerWord = wordToCount.toLowerCase();

var regex = new RegExp('\\b' + lowerWord + '\\b', 'g');
var count = (lowerSentence.match(regex) || []).length;

document.write( "Text: The quick brown fox jumps over the lazy dog. <br> There are " + count + " occurrence(s) of word '" + wordToCount + "': " );