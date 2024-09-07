///////////////////////////////////////////////////

// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

// sample-input: 
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


let numbers = [5,6,11,12,98, 5];

let arr = [];

for ( let number of numbers){
    if (number === 5) {
        arr.push(number);
    }
    
}

console.log(arr.length);







// <br/>

// sample-input: 

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0



// ----


let numbers1 = [5,6,11,12,98, 5]

let arr1 = [];

for(let number1 of numbers1 ){
   if (number1 === 25) {
     arr1.push(number1)
   }
    
}
 
console.log(arr1.length);
