import colors from 'colors';
import { inquirerMenu } from './helpers/inquirer.js';

const main = async() =>{
    console.clear();
    let opcion;

    do {
        opcion = await inquirerMenu();

    } while (opcion.opcion !== '7');
};

main();