import { useState } from "react";

//Paso 1, tenemos que trabajar con un estado. En este caso el estado va ser un numero con el que

//Paso 2, necesito importar "useState"


const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);
    //useState me retorna un array con dos elementos. El primero es el estado actual y el segundo

    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }
    }

  return (
    <>
        <div>
            <button onClick={decrementar}> - </button>
            <p> {contador} </p>
            <button onClick={incrementar}> + </button>
        </div>

        <button onClick={() => funcionAgregar(contador)}> Agregar al carrito</button>

    </>
  )
}

//Las funciones vas sin parentesis xq se ejecutarian al momento de renderizarse.

export default ItemCount