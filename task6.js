//////////////////////////////////////////////////////

// ### Task-6:
// write a function that find the determiner of any 3/3 matrix.

function determiner(numbers) {

    let detIndex1 = 4 * ((numbers[4] * numbers[8]) - (numbers[5] * numbers[7]))
    let detIndex2 = 1 * ((numbers[3] * numbers[8]) - (numbers[5] * numbers[6]))
    let detIndex3 = -5 * ((numbers[3] * numbers[7]) - (numbers[4] * numbers[6]))


    let det = detIndex1 - detIndex2 + detIndex3;

    return det;

}


let array = [4, 1, -5, -2, 3, 1, 3, -1, 4];

let determiner1 = determiner(array);

console.log(determiner1);

