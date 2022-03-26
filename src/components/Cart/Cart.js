import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUserXmark } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const developer of cart) {
        total = total + developer.salary;
    }

    // const icon = <FontAwesomeIcon icon={faUser} />
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

            <button className="btn-select" onClick={() => props.selectOne}> <FontAwesomeIcon icon={faCheck}> </FontAwesomeIcon>Select one</button> <br />
            <button className="btn-remove"><FontAwesomeIcon icon={faUserXmark}> </FontAwesomeIcon> Remove</button>
        </div>
    );
};

export default Cart;