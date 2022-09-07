import React from 'react'
import {useState} from 'react'

function Contador() {
  let [numero, setNumero] = useState(0)

  function aumentar() {
    setNumero(numero + 1)
  }
function disminuir() {
    setNumero(numero - 1)
}
  return (
    <div>
        <p>{numero}</p>
        <button onClick={disminuir}>-</button>
          <button onClick={aumentar}>+</button>
      
    </div>
  )
}

export default Contador
