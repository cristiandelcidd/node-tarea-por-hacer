const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea.'
}


const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea pendiente', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina el elemento indicado de la lista de tareas por hacer', {
        descripcion
    })
    .help()
    .argv;



module.exports = {
    argv
}