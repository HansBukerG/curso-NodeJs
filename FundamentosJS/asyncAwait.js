const personas = [
    {
        id: 1,
        nombre: 'Hans'
    },
    {
        id: 2,
        nombre: 'Leonardo'
    },
    {
        id: 3,
        nombre: 'Diego'
    },
]

const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 2000,
    },
]

const getEmpleado = (id) => {

    return new Promise( (resolve,reject) => {
        const persona = personas.find( elemento => elemento.id === id )?.nombre;
        (persona) 
            ?   resolve(`${persona}`)
            :   reject(`No existe empleado con id: ${id}`);
        }
    )
}

const getSalario = (id) => {
    return new Promise( (resolve,reject) => {
        const salario = salarios.find(salario => salario.id === id)?.salario;
        (salario)
            ? resolve(`${salario}`)
            : reject(`No existe salario con id: ${id}`);
    }
    )
}




const getInfoUsuario = async(id) => {
    try {
        const persona = await getEmpleado(id);
        const salario = await getSalario(id);
    
        return `Nombre: ${persona}, salario: ${salario}`;
    } catch (error) {
        throw error;
    }
}

const id = 1;

getInfoUsuario(id)
    .then(respuesta => {
        console.log('Todo Bien!');
        console.log(`${respuesta}`)
    })
    .catch( err => {
        console.log('Todo Mal!');
        console.log(`${err}`)
    } )