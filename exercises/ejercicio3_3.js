/*
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:
*/

const input1 = 'string';
const input2 = 'variable';
const input3 = 'pointer';

const formatString = (value) => {
    let newString = [...value];
    newString = newString.reverse();

    let countLeter = newString.length;

    newString = String(newString).split(',').join('');
    result = String(countLeter).concat(' ').concat(newString);
    console.log(result);
};



formatString(input1); // '6 gnirts'
formatString(input2); // '8 elbairav'
formatString(input3); // '7 retniop'