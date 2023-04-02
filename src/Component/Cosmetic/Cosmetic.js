import React from 'react';
import { AddtoManage, removeFromDB } from '../fakeDb/FakeDb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {
        AddtoManage(id)
    }
    const removeFromCart = id => {
        removeFromDB(id)
    }
    return (
        <div className='cosmetic'>
            <h2>Name : {name}</h2>
            <h4>Price : {price}</h4>
            <p>Id : {id}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;