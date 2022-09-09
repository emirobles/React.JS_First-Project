import { render } from '@testing-library/react'
import React from 'react'
import { Component } from 'react';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
    return (
        <div>Hola {props.nombre} {props.apellido} </div>
        <ItemList/>
    )
}

export default ItemListContainer

