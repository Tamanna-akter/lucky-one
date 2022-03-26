import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Developer.css'

const Developer = (props) => {
    const { img, name, job, salary } = props.developer;
    // const btnIcon = <FontAwesomeIcon icon={faUserPlus} />
    return (
        <div className='developer-cart'>

            <img src={img} alt=""></img>
            <div className='developer-info'>

                <h5>Name: {name}</h5>
                <p>Job: {job}</p>
                <p>Salary: ${salary}</p>
            </div>

            <button onClick={() => props.handleToCart(props.developer)} className='btn-cart'> <FontAwesomeIcon icon={faUserPlus}> </FontAwesomeIcon> Invite
            </button>
        </div>
    );
};

export default Developer;