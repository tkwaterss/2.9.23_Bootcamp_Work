/*
check for remainder 10 - this is the last number. add this to result.
Remove last number by dividing by 10 and using .floor
rince repeat until loop ends
while / 10 > 1

*/

//Solution 1 - returns an array
let test1 = 123456;
let test2 = -123456;
let test3 = 1000
let test4 = 00005
let test5 = 0

const reverseInt = num => {
    let reversed = [];
    if (num < 0) {num *= -1}
    if (num === 0) {
        reversed = 0;
    } else {
        while (num >= 1) {
            reversed.push(num % 10);
            num = Math.floor(num / 10);
        }
    }
    return console.log(`The number reversed is ${reversed}`);
}

reverseInt(test1);
reverseInt(test2);
reverseInt(test3);
reverseInt(test4);
reverseInt(test5);



//Solutino 2 - returns a number
const reversedInt = num => {
    let reversed = 0;
    if (num < 0) {num *= -1}
    if (num === 0) {
        reversed = 0;
    } else {
        while (num >= 1) {
            let lastDigit = num % 10
            reversed = (reversed * 10) + lastDigit;
            num = Math.floor(num / 10);
        }
    }
    return console.log(`The number reversed is ${reversed}`);
}

reversedInt(test1);
reversedInt(test2);
reversedInt(test3);
reversedInt(test4);
reversedInt(test5);

//Solution 3 - Instructors Solution
const printDigits = num => {
    
}