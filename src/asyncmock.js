const misProductos = [
    {id:"1", nombre: "Madara", precio: 10000, stock: 10, img: "../public/img/madara.jpg", idCat: "uchiha"},
    {id:"2", nombre: "Tobi", precio: 9500, stock: 10, img: "../public/img/tobi.PNG", idCat: "uchiha"},
    {id:"3", nombre: "Itachi", precio: 9000, stock: 10, img: "../public/img/itachi.PNG", idCat: "uchiha"},
    {id:"4", nombre: "Pain", precio: 8000, stock: 20, img: "../public/img/pain.jpg", idCat: "uzumaki"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(misProductos);
        }, 100)
    })
}


//Creamos una funcion similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () =>{
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);

        }, 100)

    })

}

//Creamos una función que nos retorna un array de una detrminada categoría de productos:

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    }) 
}