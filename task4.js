// ///////////////////////////////////////////////////////
// ### Task-4: 
// Write a function to find the longest word in a given string.

// sample-input: 
// I am learning Programming to become a programmer

// sample-output: Programming

// ----



function findTheLongestWord(str) {

    let strArray = str.split(' ');

    let array = [];

    for (let i of strArray) {
        array.push(i.length);

    }


    for (let j of strArray) {

        if (j.length === Math.max(...array)) {
           
            return j;

        }

    }
}

let longestWord = findTheLongestWord('I am learning Programming to become a programmer');

console.log(longestWord);

let longestWord1 = findTheLongestWord('The smallest of the given numbers. Returns NaN if any of the parameters is or is converted into NaN. Returns Infinity if no parameters are provided');

console.log(longestWord1);

let longestWord2 = findTheLongestWord('Because min() is a static method of Math, you always use it as Math.min(), rather than as a method of a Math object you created');

console.log(longestWord2);






