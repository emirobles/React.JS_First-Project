import React from 'react'

const Cart = ({ numero }) => {
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

export default Cart