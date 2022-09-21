import React from 'react';
import {useState} from 'react';

function ItemCount({stock, initial = 0, onAdd}) {
  const [numero, setNumero] = useState(initial);

  return (
    <>
      <div className='contador'>
        <button type="button" className="btn btn-circle" onClick={() => {
          numero > initial ? setNumero(numero - 1) : setNumero(initial)
        }}>
          -
        </button>
        <p> {numero} </p>
        <button type="button" className="btn btn-circle" onClick={() => {
          numero <= initial ? setNumero(numero + 1) : setNumero(stock)
        }}>
          +
        </button>
      </div>
      <div>
        <button type="button" className='btn btn-circle-two' onClick={() => { onAdd(numero) }}>
          Comprar
        </button>

      </div>
    </>  
  )
}





export default ItemCount
