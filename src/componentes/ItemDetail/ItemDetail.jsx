import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

//Importamos
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({id, nombre, precio, img, stock}) => {

  //1)Creamos un estado cn la cant de productos agregados.
const [agregarCantidad, setAgregarCantidad] = useState(0);

//useContext: 
const {agregarProducto} = useContext(CarritoContext);

//2)Creamos una funcion manejadora de la cantidad:
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);

    //Ahora creo un objeto con el item y la cantidad:
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);

  }
  return (
    <div>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>Id: {id} </h3>
        <p className='textoBlanco'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facere laborum iusto temporibus, porro esse eaque, veritatis nulla magnam atque reiciendis magni nesciunt natus nemo minus praesentium dolorum illo? Vel.</p>
        <img src={img} alt={nombre} />
        {
          //Empleamos la logica de montar y desmontar componentes.
        }

        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }

    </div>
  )
}

export default ItemDetail