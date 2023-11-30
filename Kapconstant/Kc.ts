import * as readlineSync from "readline-sync";
function getAscendingOrder(digits: number[]) {
  const ascending: number = parseInt(digits.sort().join(""), 10);
  return ascending;
}

function getDecendingOrder(digits: number[]) {
  const descending: number = parseInt(
    digits.sort((a, b) => b - a).join(""),
    10
  );
  return descending;
}

function convertNumberToSingleDigitArray(number: Number) {
  const numberArray: number[] = number.toString().split("").map(Number);
  return numberArray;
}
function kaprekarRoutine(number: number): void {
  let numberOfIteration = 0;
  while (number !== 6174) {
    const digitArray: number[] = convertNumberToSingleDigitArray(number);
    const ascending = getAscendingOrder(digitArray);
    const descending = getDecendingOrder(digitArray);
    number = descending - ascending;
    console.log(`${descending} - ${ascending} = ${number}`);
    numberOfIteration = numberOfIteration + 1;
  }

  console.log(
    `kaprekar's contant is reached and number of iteration is -> ${numberOfIteration}`
  );
}

function isValidFourDigitNumber(enteredNumber: number) {
  if (1000 <= enteredNumber && enteredNumber < 10000) {
    return true;
  } else {
    return false;
  }
}

function convertStringToNumber(enteredString: string) {
  const number = Number(enteredString);
  return number;
}

function takeInputFromUser() {
  const userInput: string = readlineSync.question("Enter a 4 digit number: ");
  const enteredNumber = convertStringToNumber(userInput);
  if (isValidFourDigitNumber(enteredNumber)) {
    kaprekarRoutine(Number(userInput));
  } else {
    console.log("User entered invalid number");
  }
}

takeInputFromUser();
