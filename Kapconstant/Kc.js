"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function kaprekarRoutine(number) {
    var numberOfIteration = 0;
    while (number !== 6174) {
        var digits = number.toString().split('').map(Number);
        var ascending = parseInt(digits.sort().join(''), 10);
        var descending = parseInt(digits.sort(function (a, b) { return b - a; }).join(''), 10);
        number = descending - ascending;
        console.log("".concat(descending, " - ").concat(ascending, " = ").concat(number));
        numberOfIteration = numberOfIteration + 1;
    }
    console.log("kaprekar's contant is reached and number of iteration is -> ".concat(numberOfIteration));
}
// Example: Starting with a random four-digit number
// const initialNumber: number = 3524;
var userInput = readlineSync.question('Enter a number: ');
kaprekarRoutine(Number(userInput));
