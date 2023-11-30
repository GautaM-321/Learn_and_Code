import * as readlineSync from 'readline-sync';
function kaprekarRoutine(number: number): void {
    let numberOfIteration=0;
    while (number !== 6174) {
        const digits: number[] = number.toString().split('').map(Number);
        const ascending: number = parseInt(digits.sort().join(''), 10);
        const descending: number = parseInt(digits.sort((a, b) => b - a).join(''), 10);
        number = descending - ascending;
        console.log(`${descending} - ${ascending} = ${number}`);
        numberOfIteration=numberOfIteration+1;
    }

    console.log(`kaprekar's contant is reached and number of iteration is -> ${numberOfIteration}`);
}

function takeInputFromUser(){
    const userInput: string = readlineSync.question('Enter a 4 digit number: ');
    kaprekarRoutine(Number(userInput));
}

takeInputFromUser();