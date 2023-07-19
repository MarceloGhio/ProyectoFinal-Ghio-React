import { useState, useEffect } from "react";
//import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';

//importamos las nuevas funciones
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, "inventario", idItem);

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data }
        setProducto(nuevoProducto);
      })
      .catch(error => console.log(error))

  }, [idItem])


  // useEffect( () => {
  //     getUnProducto(idItem)
  //     .then(res => setProducto(res))
  // }, [idItem])
  return (
    <div className="cardProducto2">
      <div className="contenedorProductos">
        <ItemDetail {...producto} />
      </div>
    </div>
  )
}

export default ItemDetailContainer