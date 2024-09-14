/*
Ejercicio 3
En estos ejercicios no tienes acceso al enunciado. Debes deducir qué hacer observando los
datos de entrada y el resultado:
*/

/*
3.1 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:
*/

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
];

const input2 = [
    'CodinGame',
    'python',
    'py',
];

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
];


// const makeDir = (values) => {
//     let dir = ""
//     for (file of values) {
//         if (file === values[0]) {
//             dir += file;
//         } else if (file === 'mp4' || file === 'py') {
//             dir += '.' + file;
//         } else {
//             dir += '/' + file;
//         }
//     };
//     return dir;
// };
const makeDir = (values) => {
    let dir = "";
    let lastElement = values[values.length - 1];
    dir = [...values]
    dir.pop();
    dir = String(dir).split(',').join('/');
    // dir = dir + '.' + lastElement;
    dir = dir.concat('.').concat(lastElement);
    return dir;
}
console.log(makeDir(input1)); // 'Downloads/Videos/capture.mp4'
console.log(makeDir(input2)); // 'CodinGame/python.py'
console.log(makeDir(input3)); // 'programming/languages/easy/beginner/useful/pythonstuff.py'
