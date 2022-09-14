import { useEffect, useState } from 'react';
import { getItem, getProducts } from '../api';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    useEffect(() => {

        getItem().then( (product) => {
            setProduct(product);
        });

        /*const getProduct = async() => {
            const product = await getItem(item.id);
            setProduct(product);
        
        }
        getProduct();*/
    }, []);
  return (   
      <ItemDetail item= {product}/>    
  )
}

export default ItemDetailContainer

