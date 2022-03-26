import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css';

const Developers = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);
    const [picked, setPicked] = useState("");


    // json data load
    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, []);
    // handle invite button 
    const handleToCart = (developer) => {
        let newCart = [...cart, developer];
        setCart(newCart);
    }
    // handle the select one button
    const selectOne = () => {
        if (cart.length === 0) {
            return;
        }
        else {
            const randomDeveloper = cart[Math.floor(Math.random() * cart.length)];
            setPicked(randomDeveloper.name);


        }

    }
    // handle remove button
    const handleToRemove = () => {
        let newCart = []
        setCart(newCart)
        setPicked("");
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
                    handleToRemove={handleToRemove}
                    picked={picked}
                ></Cart>

            </div>


        </div>
    );
};

export default Developers;