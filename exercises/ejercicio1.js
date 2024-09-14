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
    name: 'Ramiro',
    surname: 'Covian',
    modules: [
        { name: 'Node.js', date: '2024-10-21' },
        { name: 'Git', date: '2024-10-22' },
        { name: 'React', date: '2024-12-16' }
    ],
    active_search: true,

};

const seeDateReact = (info_search) => {
    let message = ''
    if (info_search === true) {
        message = `La fecha de inicio del modulo de React es el ${user.modules[2].date}`;
    } else {
        message = 'Aun no hay fecha definida para el modulo de React.';
    };
    return message;
};

console.log(seeDateReact(true));