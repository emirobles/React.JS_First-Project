import { getActiveElement } from '@testing-library/user-event/dist/utils';
import React, { useEffect } from 'react'
import { getItem, getProducts } from '../api';
import ItemDetail from './ItemDetail'


const ItemDetailContainer = ({item}) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        getItem().them((product) => {
            setProduct(product);
        });
    }, []);
  return (   
      <ItemDetail item= {product}/>        
    
  )
}

export default ItemDetailContainer
