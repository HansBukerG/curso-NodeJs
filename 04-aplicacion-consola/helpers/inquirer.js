import colors from 'colors';
import inquirer from 'inquirer';

const menuOpts = [
    {
        type:'list',
        name: 'opcion',
        message: 'que desea hacer?',
        choices: [
            {value: '1' , name: `${'Opcion 2'.green} : Listar tareas`},
            {value: '2' , name: `${'Opcion 3'.green} : Listar tareas completadas`},
            {value: '3' , name: `${'Opcion 4'.green} : Listar tareas pendientes`},
            {value: '4' , name: `${'Opcion 5'.green} : Completar tarea`},
            {value: '5' , name: `${'Opcion 1'.green} : Crear tarea`},
            {value: '6' , name: `${'Opcion 6'.green} : Borrar tarea`},
            {value: '7' , name: `${'Opcion 7'.green} : Salir`},
        ]
    }
]

const inquirerMenu = async() =>{
    console.clear();
    console.log('========================'.red);
    console.log(' Aplicacion de consola '.blue);
    console.log('========================'.red);

    let opt = await inquirer.prompt(menuOpts);

    console.log('resultado: ', opt?.opcion );

    return opt;
}


export {inquirerMenu};