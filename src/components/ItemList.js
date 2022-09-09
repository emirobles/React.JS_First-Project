import React from 'react'
import { useEffect } from 'react';
import { getProducts } from '../api';

const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getInfo = async () => {
            const items = await getProducts()
            console.log(items)
            setProducts(items);
        }
        getInfo();
    }, [])
  return (
    <ul>
        {products.map(item =>(
            <Item key = {item.id} item = {item} />

        ))}
      
    </ul>
  )
}

export default ItemList
