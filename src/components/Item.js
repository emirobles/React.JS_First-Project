import React from 'react'
import ItemList from './ItemList'

const Item = ({item}) => {
  return (
    <div className='cardsItems'>
        <div >
          <h5 className='titleItem'>{item.title}</h5>
          <img src = {item.pictureUrl}/>
          <p className='price'>Precio: ${item.price}</p>
        </div>       
      
    </div>
  )
}

export default Item
