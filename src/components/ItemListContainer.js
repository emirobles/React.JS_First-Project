import { render } from '@testing-library/react'
import React from 'react'
import { Component } from 'react';

const ItemListContainer = (props) => {
    return (
        <div>Hola {props.nombre} {props.apellido} </div>
    )
}

export default ItemListContainer

