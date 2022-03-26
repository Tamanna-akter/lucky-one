import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css';

const Developers = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);
    // const [picked, setPicked] = useState([])



    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, []);

    const handleToCart = (developer) => {
        let newCart = [...cart, developer];
        setCart(newCart);
    }

    const selectOne = () => {
        if (cart.length === 0) {
            return;
        }
        else {
            const randomProduct = cart[Math.floor(Math.random() * cart.length)];
            setCart([randomProduct])
            // console.log(randomProduct);
        }

    }
    const removeItems = () => {
        //let newCart = [...cart, items]
        let newCart = []
        setCart(newCart)
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
                <Cart cart={cart} selectOne={selectOne}
                    removeItems={removeItems}
                ></Cart>

            </div>


        </div>
    );
};

export default Developers;