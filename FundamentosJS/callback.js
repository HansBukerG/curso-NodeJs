//setTimeout(() => console.log('Hola Mundo'),5000);


const getUsuarioByID = (id,callback) =>{
    const usuario ={
        id,
        nombre:'Hans'
    }

    setTimeout(
        ()=>{
            callback(usuario);
        }
    ,1000)
}


getUsuarioByID(10,({id,nombre})=> console.log(id,nombre));