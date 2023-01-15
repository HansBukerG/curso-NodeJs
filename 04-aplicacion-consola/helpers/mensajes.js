require('colors');


const mostrarMenu = () => {

    return new Promise( resolve => {
        console.clear();
        console.log('========================'.red);
        console.log(' Seleccione una opcion '.blue);
        console.log('========================'.red);
        console.log(`${'Opcion 1'.green} : Crear tarea`);
        console.log(`${'Opcion 2'.green} : Listar tareas`);
        console.log(`${'Opcion 3'.green} : Listar tareas completadas`);
        console.log(`${'Opcion 4'.green} : Listar tareas pendientes`);
        console.log(`${'Opcion 5'.green} : Completar tarea`);
        console.log(`${'Opcion 6'.green} : Borrar tarea`);
        console.log(`${'Opcion 7'.green} : Salir`);
        
        const readline =  require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('Seleccione una opcion: ', (respuesta) => {
            readline.close();
            resolve(respuesta);
        })
    } )
}

const pausa = () => {

    return new Promise(resolve => {
        const readline =  require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        }
        )
    
        readline.question(`presione ${'ENTER'.green} para continuar\n`, (respuesta) => {
            readline.close();
            resolve();
        })
    })
}

module.exports = {
    mostrarMenu,
    pausa
}