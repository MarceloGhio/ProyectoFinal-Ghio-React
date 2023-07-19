import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import React from 'react'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);
  const imgCarrito = "https://st4.depositphotos.com/21557188/23285/v/450/depositphotos_232851740-stock-illustration-shopping-cart-icon-simple-linear.jpg"
  return (
    <div>
      <Link to="/cart">
        <img style={{width: "4rem"}} className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
        {
        cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget