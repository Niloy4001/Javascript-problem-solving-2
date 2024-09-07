// ////////////////////////////////////////////////////////
// ### Task-3: 
// Write a function to count the number of vowels in a string.

// ---


let str = 'Temperature conversions use the following formulas'

let styArray = str.toLowerCase().split('');

let sum = 0;

for (let i of styArray) {
    if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {

        for (let j = 1; j < 2; j++){
            sum = sum + j;
        }

    }

}
console.log(sum);
