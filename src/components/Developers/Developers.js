import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css';

const Developers = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, []);

    const handleToCart = (developer) => {
        let newCart = [...cart, developer];
        // console.log(developer);
        setCart(newCart);
    }

    return (
        <div className='developers-container'>


            <div className="developer">
                {
                    developers.map(developer => <Developer
                        handleToCart={handleToCart}
                        key={developer.id}
                        developer={developer}
                    ></Developer>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Developers;