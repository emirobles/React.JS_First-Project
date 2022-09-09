import React from 'react'
import ItemList from './ItemList'

const Item = ({item}) => {
  return (
    <div>
        {item.map((ItemList)=> {
            return (
                <ItemList
                key={ItemList.id}
                img={ItemList.img}
                title={ItemList.title}
                price={ItemList.price}
                />
            )
        })}
      
    </div>
  )
}

export default Item
