const tiempoEjecucion = 3000; 

console.log('Inicio de programa');

setTimeout(() => {
    console.log('Primer timeout');
}, tiempoEjecucion);

setTimeout(() => {
    console.log('Segundo timeout');
}, tiempoEjecucion);

setTimeout(() => {
    console.log('Tercero timeout');
}, tiempoEjecucion);

console.log('Fin de programa');