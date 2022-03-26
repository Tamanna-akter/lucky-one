// import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUserXmark } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

// import Developers from '../Developers/Developers';

const Cart = (props) => {
    const { cart, selectOne, handleToRemove } = props;
    //total salary calculate in cart
    let total = 0;
    for (const developer of cart) {
        total = total + developer.salary;
    }

    if (cart.length > 4) {
        alert('you can only four developers are added!!');

    }
    else {
        return (
            <div className='cart'>
                <h5>Invited Developers: {props.cart.length}</h5>
                <p>Total Salary: $ {total}</p>

                <ul>
                    {
                        cart.map(developer => <li key={developer.id} >
                            <span> <img className='cart-img' src={developer.img} alt="" /> {developer.name}</span></li>)

                    }
                </ul>
                <button className="btn-select" onClick={selectOne}> <FontAwesomeIcon icon={faCheck}> </FontAwesomeIcon>Select one</button> <br />
                <p>Name:{props.picked}</p>
                <button className="btn-remove" onClick={handleToRemove}><FontAwesomeIcon icon={faUserXmark}> </FontAwesomeIcon> Remove</button>
            </div>
        );
    };
}

export default Cart;