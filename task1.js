
// ///////////////////////////////////////////////////////////////////
// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.

// ---

function celsiusToFahrenheit(Celsius) {
    let Fahrenheit = (Celsius * (9 / 5)) + 32;
    return Fahrenheit;
}

let Fahrenheit = celsiusToFahrenheit(1);
console.log(Fahrenheit,'°F');
