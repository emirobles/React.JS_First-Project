import React from 'react'
import carritoLogo from '../shopping-cart-.png';

const CartWidget = ({ cart }) => {
  return (
    <div> 
          <img
              alt=""
              src={carritoLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
          />{''}
          En total hay {cart} productos
    </div>
  )
}

export default CartWidget

