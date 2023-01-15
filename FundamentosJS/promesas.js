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

const id= 2
/*
getEmpleado(id)
    .then(empleado => console.log(`nombre: ${empleado}`))
    .catch(error => console.log(`error id: ${error} no existe`))

getSalario(id)
    .then( respuesta =>  console.log(`salario: ${respuesta}`))
    .catch( error =>  console.log(`Error id: ${error} no existe`))
*/
let nombre;
getEmpleado(id)
    .then(empleado =>{
        nombre = empleado
        return getSalario(id)
    }  )
    .then(salario => console.log(`Persona: ${nombre}, Salario: ${salario}`))
    .catch( error => console.log(error))

