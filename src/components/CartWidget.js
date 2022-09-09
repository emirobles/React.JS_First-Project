import React from 'react'
import carritoLogo from '../shopping-cart-.png';
import {numero} from './ItemCount'
import ItemCount from './ItemCount'

const CartWidget = ({ numero }) => {
  return (
    <div> 
          <img
              alt=""
              src={carritoLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
          />
          <span>{numero}</span>          
    </div>
  )
}

export default CartWidget

