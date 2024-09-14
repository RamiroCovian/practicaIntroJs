/*
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:
*/


const input = 10;
const separator = (value) => {
    return String(value).split('').join('-');
}
// create your function here
console.log(separator(input)); // '1-0'

const secondInput = 1;
console.log(separator(secondInput)); // '1'

const thirdInput = 11234;
console.log(separator(thirdInput)); // '1-1-2-3-4'
