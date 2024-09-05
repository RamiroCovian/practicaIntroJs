/*
Crea un archivo ejercicio1.js que tenga un objeto llamado usuario con los siguientes
campos:
- Nombre (el tuyo o inventado)
- Apellidos (el tuyo o inventado)
- Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas
de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
- Si estás en búsqueda activa con un valor de verdadero o false
En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del
objeto que hemos creado anteriormente.

*/
const user = {
    name: "Ramiro",
    surname: "Covian",
    modules: [
        { "Node.js": "2024-10-21" },
        { "Git": "2024-10-22" },
        { "React": "2024-12-16" }
    ],
    active_search: true,

};

// console.log(user.modules); // devueve la lista de diccionarios
// console.log(user.modules[2]); // devuelve el diccionario { "React": "2024-12-16" }
// console.log(user.modules[2].React); // devuelve el valor de la clave React -> "2024-12-16" 

if (user.active_search === true) {
    console.log(`La fecha de inicio del modulo de React es el ${user.modules[2].React}`);
} else {
    console.log("Aun no hay fecha definida para el modulo de React.");
};

