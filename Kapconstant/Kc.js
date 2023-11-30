"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function getAscendingOrder(digits) {
    var ascending = parseInt(digits.sort().join(""), 10);
    return ascending;
}
function getDecendingOrder(digits) {
    var descending = parseInt(digits.sort(function (a, b) { return b - a; }).join(""), 10);
    return descending;
}
function convertNumberToSingleDigitArray(number) {
    var numberArray = number.toString().split("").map(Number);
    return numberArray;
}
function kaprekarRoutine(number) {
    var numberOfIteration = 0;
    while (number !== 6174) {
        var digitArray = convertNumberToSingleDigitArray(number);
        var ascending = getAscendingOrder(digitArray);
        var descending = getDecendingOrder(digitArray);
        number = descending - ascending;
        console.log("".concat(descending, " - ").concat(ascending, " = ").concat(number));
        numberOfIteration = numberOfIteration + 1;
    }
    console.log("kaprekar's contant is reached and number of iteration is -> ".concat(numberOfIteration));
}
function isValidFourDigitNumber(enteredNumber) {
    if (1000 <= enteredNumber && enteredNumber < 10000) {
        return true;
    }
    else {
        return false;
    }
}
function convertStringToNumber(enteredString) {
    var number = Number(enteredString);
    return number;
}
function takeInputFromUser() {
    var userInput = readlineSync.question("Enter a 4 digit number: ");
    var enteredNumber = convertStringToNumber(userInput);
    if (isValidFourDigitNumber(enteredNumber)) {
        kaprekarRoutine(Number(userInput));
    }
    else {
        console.log("User entered invalid number");
    }
}
takeInputFromUser();
