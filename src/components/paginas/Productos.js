import React from 'react'
import {useParams} from "react-router-dom";

const Productos = () => {
  const{identificadorDelProducto} = useParams();
  return (
    <div>
        Product: {identificadorDelProducto}      
    </div>
  )
}

export default Productos
