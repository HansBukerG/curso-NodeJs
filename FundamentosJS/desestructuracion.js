const deadpool = {
    nombre: 'wade',
    apellido: 'wilson',
    poder: 'regeneracion',
    edad: 50,
    nombreCompleto: function getNombre(){
        return `Nombre: ${this.nombre} Apellido: ${this.apellido} Poder: ${this.poder}`
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;


const {nombre,apellido,poder, edad = 0} = deadpool
//console.log(nombre,apellido,poder,edad);


//console.log(deadpool.getNombre()+'adasdasd');

/*Esto es una desestructuración de un objeto, sirve para  */
function imprimeHeroe({nombre,apellido}){

    //const {nombre,apellido,poder,edad} = heroe 
    //console.log(nombre,apellido);
}

imprimeHeroe(deadpool);

const heroes = ['Deadpool','Superman','Batman']

//console.log(h1);

const [,,h3] = heroes;

//console.log(h1);
//console.log(h2);
console.log(h3);
