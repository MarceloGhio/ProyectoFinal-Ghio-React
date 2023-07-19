import { useState, useEffect } from "react"
//import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

//Importamos nuevas funciones
import { collection, getDocs, where, query } from "firebase/firestore"

//collection la uso para vincular una coleccion de firestore (ejemplo: inventario)
//getDocs me trae todos los documentos de una coleccion. (una coleccion seria como un array y cada documento seria como un objeto)
//query la uso para hacer consultas con la base de datos
//where para usar filtros en las consultas

import { db } from "../../services/config";



const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();


  useEffect( ()=>{
      const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

      getDocs(misProductos)
        .then(res => {
          const nuevosProductos = res.docs.map( doc => {
            const data = doc.data()
            return {id: doc.id, ...data}
          })
          setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))

  },[idCategoria])


  // useEffect( () => {
  //   const funcion = idCategoria ? getProductosPorCategoria : getProductos;

  //   funcion(idCategoria)
  //   .then(res => setProductos(res))

  // }, [idCategoria]) 

  // useEffect( () => {
  //       getProductos()
  //       .then(respuesta => setProductos(respuesta))
  //       .catch(error => console.log(error))
  // },  [])
  return (
    <>
        <h2>{props.greeting}</h2>    
        <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer