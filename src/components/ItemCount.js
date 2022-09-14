import React from 'react';
import {useState} from 'react';

function ItemCount({stock, initial, onAdd}) {
  const [numero, setNumero] = useState(initial);
  const [btnDisabled, setBtnDisabled] = useState(true);

  function aumentar() {
    setNumero(numero + 1);
    numero == stock ? setBtnDisabled(true) : setBtnDisabled(false);
  }
  function disminuir() {
    setNumero(numero - 1);    
  }
  return (
    <div>
        <button className={btnDisabled ? `buttonDisabled` : ''} onClick={disminuir}>-</button>
        <span>{numero}</span>        
        <button className={btnDisabled ? `buttonDisabled` : ''} onClick={aumentar}>+</button>
        <div>
          <button className={btnDisabled ? `buttonDisabled` : ''} onClick={() => onAdd(numero)}>Agregar al Carrito</button>
        </div>  
    </div>
  )
}

export default ItemCount
