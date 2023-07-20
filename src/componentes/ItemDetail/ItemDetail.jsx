import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

// Importamos
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  // 1) Creamos un estado con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  // useContext:
  const { agregarProducto } = useContext(CarritoContext);

  // 2) Creamos una función manejadora de la cantidad:
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    // console.log("Productos agregados: " + cantidad);

    // Ahora creo un objeto con el item y la cantidad:
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <div className='itemDetailContainer'>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>Id: {id}</h3>
      <p className='textoBlanco'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <img src={img} alt={nombre} />
      {agregarCantidad > 0 ? (
        <Link className='linkTerminarCompra' to='/cart'>
          Terminar compra
        </Link>
      ) : (
        <div className='itemCountContainer'>
          <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
        </div>
      )}
    </div>
  );
};

export default ItemDetail;