import React from 'react';
import './Question.css';
const Question = () => {
    return (
        <div className='question'>
            <div className='question1'>
                <h3>How React Works?</h3>
                <p> React is a javascript library for building user interfaces. React uses a virtual DOM, which is essentially a JavaScript representation of a DOM tree. As a result, it will use the virtual representation of the DOM when reading or writing to it. The virtual DOM will then attempt to update the browser's DOM in the most efficient manner possible.React employs a declarative model that makes it easy to explain about our application while also aiming to be fast and extensible.</p>
            </div>
            <div className='question2'>
                <h3>What are the difference between props and state?</h3>
                <p>Props can only be read, whereas state changes can be made asynchronously. Props can not be modified but state can be modified using this.state. State are mutable whereas props are immutable. State created within component but props passed in from parent. Props can be used in both the class and function components, however state can only be utilized in the class component.
                </p>
            </div>
        </div>
    );
};

export default Question;