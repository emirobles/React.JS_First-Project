import { render } from '@testing-library/react'
import React from 'react'
import { Component } from 'react';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
    return (
        <>
            <div className="greet">Hola {props.nombre} {props.apellido} </div>
            <h1>Tenemos las siguientes ofertas</h1> 
            <ItemList></ItemList>        
        </>
    )
}

export default ItemListContainer

