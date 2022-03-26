import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css';

const Developers = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);
    const [picked, setPicked] = useState(null);
    // const [p, setP] = useState(0);
    const selectOne = () => {
        if (cart.length > 0) {
            setPicked(Math.floor(Math.random() * cart.length));
            setPicked(picked);
        }
    }


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
                        selectOne={selectOne}
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