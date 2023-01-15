/*
    const: Permite declaracion de variables ligeras que no pueden ser cambiadas dentro del programa.
    let: Permite declaraciones de variables que pueden ser modificadas.
    var: Es una aberracion.
*/


let nombre = 'wolverine';//crea variables como ambito bglobal, ya no se debe utilizar

if (true) {
    nombre = 'Magneto';
}

console.log(nombre);