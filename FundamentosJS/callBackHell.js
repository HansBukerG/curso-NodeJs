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


const getEmpleado = (id,callback) => {
    const persona = personas.find( elemento => elemento.id === id )?.nombre

    if (persona) {
        callback(null, persona)
    } else {
        callback(`persona con id:${id} No existe en el listado`)
    }
}

const getSalario = (id,callback) =>{
    const salario = salarios.find(elemento => elemento.id === id)?.salario

    if (salario) {
        callback(null,salario)
    } else {
        callback(`No existe salario con id: ${id}`)
    }
}

const id = 2

getEmpleado(id, (error,nombre) => {
    if (error) {
        console.log('Error!');
        return console.log(error);
    }
    console.log(`Empleado: ${nombre}`);

} )

getSalario(id, (error,salario) => {

    if (error) {
        console.log('Error!')
        return console.log(error)
    }

    console.log(`salario: ${salario}`);

})


