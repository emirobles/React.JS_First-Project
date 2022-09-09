import React from 'react'
import {useState} from 'react'

function ItemCount(stock, initial, onAdd) {
  let [numero, setNumero] = useState(initial)

  function aumentar() {
    setNumero(numero + 1)
  }
  function disminuir() {
    setNumero(numero - 1)
  }
  return (
    <div>
        <button disable={numero <= 1} onClick={disminuir}>-</button>
        <p>{numero}</p>        
        <button disable={numero >= stock} onClick={aumentar}>+</button>
        <div>
          <button disable={stock <= 0} onClick={() => onAdd(numero)}>Agregar al Carrito</button>
        </div>
                
      
    </div>
  )
}

export default ItemCount
