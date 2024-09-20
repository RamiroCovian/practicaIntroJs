
function obtenerUsuario(id) {
    let usuario;
    return new Promise((resolve) => {
        setTimeout(() => {
            if (id === 1) {
                resolve(usuario = { id: 1, nombre: 'John Doe' });
            } else {
                resolve(undefined);
            }
        }, 2000);
    });
}

obtenerUsuario(1).then(usuario => {
    console.log(usuario);
});