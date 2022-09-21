import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList'

const ItemDetail =({item})=> (  
  <div className='detailedInfo'>
    <div className='cardItem'>
      <h2>Información detallada</h2>
      <p className='itemTitle'>{item.title}</p>
      <img src ={item.pictureUrl} alt = "product img"/>
      <p className='description'>{item.description}</p>
      <p className='price'>Precio: ${item.price}</p>
      <ItemCount stock={item.stock} onAdd={(c) => {
        setCount(c);
      }}/>
      : <Link to={`/cart`}>Terminar compra</Link>
    </div>
        
  </div>
)


export default ItemDetail
